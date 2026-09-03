import os
import glob

html_files = glob.glob("*.html")

for filepath in html_files:
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    new_lines = []
    for line in lines:
        if 'hover:text-brand transition-colors">Home<' in line:
            # Skip the top nav Home link
            continue
        if 'mobile-link transition-colors">Home<' in line:
            # Skip the mobile nav Home link
            continue
        new_lines.append(line)
        
    with open(filepath, 'w') as f:
        f.writelines(new_lines)
print("Done.")
