import glob

files = glob.glob('*.html')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Update Services dropdown button
    content = content.replace(
        '<button class="flex items-center gap-1 hover:text-brand transition-colors focus:outline-none">',
        '<button class="uppercase font-medium text-sm tracking-wider flex items-center gap-1 hover:text-brand transition-colors focus:outline-none">'
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

