# Modern Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- Fully responsive layout
- Modern and clean design
- Interactive elements with JavaScript
- Project filtering
- Animated skill bars
- Contact form
- Smooth scrolling
- Typing animation
- Mobile-friendly navigation

## Project Structure

```
portfolio/
│
├── index.html              # Main HTML file
├── css/
│   └── style.css           # CSS styles
├── js/
│   └── script.js           # JavaScript functionality
├── images/                 # Image directory
│   ├── profile.jpg         # Profile image
│   ├── about.jpg           # About section image
│   ├── project1.jpg        # Project images
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── project5.jpg
│   └── project6.jpg
└── resume.pdf              # Your resume/CV for download
```

## Getting Started

1. Clone or download this repository.
2. Replace the placeholder images in the `images` folder with your own.
3. Update the personal information and content in `index.html`.
4. Customize colors and styles in `css/style.css`.
5. Modify the typing text array in `js/script.js` to reflect your skills.
6. Add your own projects to the projects section.

## Customization

### Changing Colors

To change the theme colors, edit the CSS variables in the `:root` selector in `style.css`:

```css
:root {
  --primary-color: #4a63e7; /* Main accent color */
  --secondary-color: #6c757d; /* Secondary text color */
  --dark-color: #2d2e32; /* Dark elements color */
  --light-color: #f8f9fa; /* Light background color */
  /* ... other variables ... */
}
```

### Updating Content

1. **Personal Information**: Update your name, profession, social links, and contact information in `index.html`.
2. **Projects**: Add/remove project cards in the projects section. Use the `data-category` attribute to enable filtering.
3. **Skills**: Update your skill percentages in the skills section.
4. **Typing Animation**: Modify the profession list in `script.js`:

```javascript
const textArray = ["Web Developer", "Designer", "Freelancer", "Photographer"];
```

### Adding More Sections

To add a new section:

1. Create your section in `index.html` following the existing pattern.
2. Add styles for your new section in `style.css`.
3. If needed, add JavaScript functionality in `script.js`.

## Browser Compatibility

This website is compatible with all modern browsers:

- Chrome
- Firefox
- Safari
- Edge
- Opera

## External Libraries and Resources

- [Font Awesome](https://fontawesome.com/) - For icons
- [Google Fonts](https://fonts.google.com/) - For typography (Poppins font)

## License

This project is available for personal and commercial use.

## Credits

Design and development by [Your Name]

---

Feel free to reach out if you have any questions or feedback!
