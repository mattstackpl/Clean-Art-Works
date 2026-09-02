import os, glob

# Get the updated header from index.html
with open('index.html', 'r') as f:
    content = f.read()
    
# Extract header block
header_start = content.find('<header class="fixed')
header_end = content.find('</header>') + 9
if header_start != -1 and header_end != -1:
    new_header = content[header_start:header_end]
else:
    print("Could not find header in index.html")
    exit(1)

html_files = glob.glob('*.html')
for file in html_files:
    if file == 'index.html':
        continue
        
    with open(file, 'r') as f:
        file_content = f.read()
        
    # Replace header
    start = file_content.find('<header class="fixed')
    end = file_content.find('</header>') + 9
    
    if start != -1 and end != -1:
        file_content = file_content[:start] + new_header + file_content[end:]
        print(f"Updated header in {file}")
        
    # Also replace colors!
    file_content = file_content.replace('text-accent', 'text-brand')
    file_content = file_content.replace('fill-accent', 'fill-brand')
    file_content = file_content.replace('border-accent', 'border-brand')
    file_content = file_content.replace('ring-accent', 'ring-brand')
    
    with open(file, 'w') as f:
        f.write(file_content)

print("Done!")
