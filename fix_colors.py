import os
import glob

# Mapping of hardcoded strings to replace
replacements = {
    'bg-[#2F589E]': 'bg-brand',
    'bg-[#CEDEF9]': 'bg-brand-pastel',
    'from-[#CEDEF9]': 'from-brand-pastel',
    'bg-[#E9F0FA]': 'bg-brand-pastel',
    'bg-[#f8f9fa]': 'bg-surface',
    'text-[#6E9EEC]': 'text-brand-light',
}

files = glob.glob('*.html') + ['theme.js']

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    new_content = content
    for old, new in replacements.items():
        new_content = new_content.replace(old, new)
        
    if new_content != content:
        print(f"Updated {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

