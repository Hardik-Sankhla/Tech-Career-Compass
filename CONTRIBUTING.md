# Contributing to Tech Career Compass

Thank you for your interest in contributing to Tech Career Compass! This document provides guidelines for contributing to the project.

## 🌟 Ways to Contribute

### Content Contributions
- **Update salary data** with current market information
- **Add new career paths** or specializations
- **Write blog posts** about career experiences and insights
- **Improve existing guides** with more details or corrections
- **Fix typos and grammar** errors
- **Add resources** like courses, books, or tools

### Technical Contributions
- **Improve site performance** and loading times
- **Add new features** to enhance user experience
- **Fix bugs** in the website functionality
- **Enhance accessibility** (WCAG compliance)
- **Optimize SEO** and metadata
- **Improve mobile responsiveness**

### Community Contributions
- **Answer questions** in GitHub Discussions
- **Review pull requests** from other contributors
- **Share the project** with your network
- **Provide feedback** on existing content

## 📝 Content Guidelines

### Writing Blog Posts

1. Create a new file in `_posts/` with format: `YYYY-MM-DD-title-with-hyphens.md`

2. Use this frontmatter template:
```markdown
---
layout: post
title: "Your Descriptive Title"
date: 2026-02-08
category: Career Advice | Industry Trends | Skill Development | Salary Insights
tags: [tag1, tag2, tag3]
reading_time: X
excerpt: "Brief 1-2 sentence description"
---
```

3. Follow these writing guidelines:
   - Use clear, concise language
   - Include practical examples
   - Add relevant statistics when possible
   - Use headers (##, ###) for structure
   - Keep paragraphs short (2-4 sentences)
   - Include actionable takeaways

### Updating Career Guides

1. Maintain consistent structure across guides:
   - Overview and role description
   - Required skills and technologies
   - Career progression path
   - Salary information
   - Learning resources
   - Common challenges

2. Keep salary data current:
   - Use multiple sources (levels.fyi, Glassdoor, etc.)
   - Include geographic variations
   - Show ranges, not single numbers
   - Update at least annually

3. Technical accuracy:
   - Verify all technical information
   - Use current versions of tools/frameworks
   - Include deprecation notices when relevant
   - Link to official documentation

## 🔧 Development Guidelines

### Setting Up Local Development

```bash
# Fork and clone the repository
git clone https://github.com/YOUR-USERNAME/Tech-Career-Compass.git
cd Tech-Career-Compass

# Install Ruby and Bundler if needed
# Then install dependencies:
bundle install

# Run the site locally
bundle exec jekyll serve

# View at http://localhost:4000/Tech-Career-Compass/
```

### Making Changes

1. **Create a branch** for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**:
   - Test locally before committing
   - Follow existing code style
   - Keep commits focused and atomic
   - Write clear commit messages

3. **Test your changes**:
   ```bash
   # Ensure site builds without errors
   bundle exec jekyll build
   
   # Check for broken links (if you have html-proofer)
   bundle exec htmlproofer ./_site --disable-external
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Clear description of what changed"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**:
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template
   - Wait for review

### Code Style

#### HTML/Liquid
- Use consistent indentation (2 spaces)
- Keep templates modular and reusable
- Use semantic HTML5 elements
- Add ARIA labels for accessibility

#### CSS
- Follow BEM naming convention when appropriate
- Use CSS variables for colors and spacing
- Keep selectors specific but not overly complex
- Comment complex CSS logic
- Mobile-first responsive design

#### JavaScript
- Use modern ES6+ syntax
- Keep functions small and focused
- Add comments for complex logic
- Avoid jQuery (use vanilla JS)
- Ensure accessibility (keyboard navigation, etc.)

#### Markdown
- Use ATX-style headers (# ## ###)
- Add blank lines between sections
- Use reference-style links for better readability
- Include alt text for images

## ✅ Pull Request Process

1. **Before submitting**:
   - Ensure your changes work locally
   - Check for any console errors
   - Verify responsive design
   - Run spell check on content
   - Review your changes for quality

2. **PR Description should include**:
   - Summary of changes
   - Motivation/context
   - Screenshots (for UI changes)
   - Testing performed
   - Related issues (if applicable)

3. **After submission**:
   - Respond to review comments
   - Make requested changes
   - Keep PR scope focused
   - Be patient and respectful

4. **Review process**:
   - Maintainers will review your PR
   - May request changes or clarification
   - Once approved, will be merged
   - You'll be added to contributors!

## 🐛 Reporting Bugs

### Before reporting:
- Check if the issue already exists
- Try to reproduce the bug
- Check if it's already fixed in main branch

### When reporting, include:
- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/OS information
- Any error messages

Use this template:
```markdown
**Bug Description:**
Clear description of what's wrong

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Environment:**
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
- Device: [e.g., Desktop, iPhone 13]

**Screenshots:**
[If applicable]
```

## 💡 Suggesting Features

We welcome feature suggestions! Please:
1. Check if it's already been suggested
2. Open a GitHub Discussion (preferred) or Issue
3. Explain the problem it solves
4. Describe your proposed solution
5. Consider alternative approaches

## 📜 Content License

By contributing content, you agree that your contributions will be licensed under:
- **Creative Commons Attribution-ShareAlike 4.0 International License** for documentation and blog content
- **MIT License** for code contributions

## 🤝 Code of Conduct

### Our Standards
- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Personal or political attacks
- Spam or self-promotion
- Publishing others' private information

## 📞 Getting Help

Need help contributing?
- Ask in [GitHub Discussions](https://github.com/tech-career-compass/Tech-Career-Compass/discussions)
- Open an issue with the "question" label
- Review existing documentation
- Check out [Jekyll documentation](https://jekyllrb.com/docs/)

## 🎉 Recognition

Contributors will be:
- Listed in our README
- Mentioned in release notes (for significant contributions)
- Given credit in relevant documentation
- Invited to be maintainers (for sustained contributions)

---

**Thank you for contributing to Tech Career Compass!** Your efforts help thousands of people navigate their tech careers successfully. 🚀
