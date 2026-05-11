"""One-shot image compression for gil-therapy site.

UI images: resize so longest side <= 1600px, save JPEG q85 + WebP q80.
OG images: resize so longest side <= 1200px, save JPEG q82 (no WebP -
many social crawlers still prefer JPEG).
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent / "assets" / "images"
UI = ROOT / "ui"
OG = ROOT / "og"


def fit(img: Image.Image, max_side: int) -> Image.Image:
    img = ImageOps.exif_transpose(img)
    w, h = img.size
    longest = max(w, h)
    if longest <= max_side:
        return img
    scale = max_side / longest
    return img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)


def process(path: Path, max_side: int, jpeg_q: int, make_webp: bool) -> None:
    before = path.stat().st_size
    with Image.open(path) as im:
        im = im.convert("RGB")
        im = fit(im, max_side)
        im.save(path, "JPEG", quality=jpeg_q, optimize=True, progressive=True)
        if make_webp:
            webp_path = path.with_suffix(".webp")
            im.save(webp_path, "WEBP", quality=80, method=6)
    after = path.stat().st_size
    pct = 100 - (after * 100 / before)
    w, h = Image.open(path).size
    print(f"  {path.name}: {before/1024:.0f}KB -> {after/1024:.0f}KB "
          f"({pct:.0f}% smaller) [{w}x{h}]")


print("== UI images (max 1600px, JPEG q85 + WebP q80) ==")
for p in sorted(UI.glob("*.jpg")):
    process(p, max_side=1600, jpeg_q=85, make_webp=True)

print("\n== OG images (max 1200px, JPEG q82) ==")
for p in sorted(OG.glob("*.jpg")):
    process(p, max_side=1200, jpeg_q=82, make_webp=False)

print("\nDone.")
