import glob

files = glob.glob('*.html')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace in nav classes
    content = content.replace(
        'text-sm font-medium uppercase tracking-wider',
        'text-sm font-semibold uppercase tracking-wider'
    )
    
    # Replace in button classes
    content = content.replace(
        'uppercase font-medium text-sm tracking-wider',
        'uppercase font-semibold text-sm tracking-wider'
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

