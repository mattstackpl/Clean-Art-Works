import os
import glob

html_files = glob.glob("*.html")
targets = [
    "View Pricing",
    "Learn more",
    "See all testimonials",
    "Read more",
    "Our Process",
    "Explore Services"
]

for filepath in html_files:
    with open(filepath, 'r') as f:
        content = f.read()
    
    for t in targets:
        # replace chevron-right with arrow-right for these specific labels
        content = content.replace(f'{t} <i data-lucide="chevron-right"', f'{t} <i data-lucide="arrow-right"')
        
    with open(filepath, 'w') as f:
        f.write(content)
print("Done.")
