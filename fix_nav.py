import glob

files = glob.glob('*.html')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Update <nav> wrapper
    content = content.replace(
        '<nav class="hidden lg:flex items-center gap-6 lg:gap-8 text-body text-gray-700">',
        '<nav class="hidden lg:flex items-center gap-6 lg:gap-8 text-sm font-medium uppercase tracking-wider text-gray-700">'
    )
    
    # Update Services dropdown button
    content = content.replace(
        '<button class="text-body flex items-center gap-1 hover:text-brand transition-colors focus:outline-none">',
        '<button class="flex items-center gap-1 hover:text-brand transition-colors focus:outline-none">'
    )
    
    # Dropdown items
    content = content.replace(
        'class="text-body px-4 py-3 text-gray-700 hover:bg-brand/5 hover:text-brand rounded-xl transition-colors flex items-center justify-between group/link"',
        'class="text-sm font-medium uppercase tracking-wider px-4 py-3 text-gray-700 hover:bg-brand/5 hover:text-brand rounded-xl transition-colors flex items-center justify-between group/link"'
    )
    
    # Update mobile menu wrapper links
    # The mobile menu has links with class="text-body p-4 text-gray-800 ... mobile-link"
    content = content.replace(
        'class="text-body p-4 text-gray-800 hover:bg-brand/5 rounded-2xl mobile-link transition-colors"',
        'class="text-sm font-medium uppercase tracking-wider p-4 text-gray-800 hover:bg-brand/5 rounded-2xl mobile-link transition-colors"'
    )
    
    # Mobile menu services button
    content = content.replace(
        'class="w-full flex items-center justify-between text-body p-4 text-gray-800 hover:bg-brand/5 rounded-2xl transition-colors focus:outline-none"',
        'class="w-full flex items-center justify-between text-sm font-medium uppercase tracking-wider p-4 text-gray-800 hover:bg-brand/5 rounded-2xl transition-colors focus:outline-none"'
    )
    
    # Mobile menu sub-links
    content = content.replace(
        'class="text-body p-3 text-gray-700 hover:bg-brand/5 rounded-xl mobile-link transition-colors"',
        'class="text-sm font-medium uppercase tracking-wider p-3 text-gray-700 hover:bg-brand/5 rounded-xl mobile-link transition-colors"'
    )
    
    # Mobile menu phone button
    content = content.replace(
        'class="text-body font-medium flex items-center justify-center gap-2 bg-brand text-white p-4 rounded-full mt-2"',
        'class="text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2 bg-brand text-white p-4 rounded-full mt-2"'
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

