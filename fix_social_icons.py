import os
import glob

html_files = glob.glob("*.html")

for filepath in html_files:
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace the hover classes for social icons
    content = content.replace(
        'brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all',
        'brightness-0 invert transition-all'
    )
        
    with open(filepath, 'w') as f:
        f.write(content)
print("Done.")
