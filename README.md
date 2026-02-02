# Bryan Lordeus - Portfolio Website

### Live Site - https://my-react-portfolio-six-alpha.vercel.app/

A modern, filterable portfolio showcasing web development projects with a clean, professional design optimized for both job hunting and client work.

---

## 🎯 Features

- **Smart Project Filtering** - Category-based filter system (Web Apps, Client Sites, Landing Pages)
- **Professional Card Design** - Structured cards with visible tech stack tags and clear CTAs
- **Behance Integration** - Direct link to marketing and social media portfolio
- **Modern Tech Stack** - Built with Next.js and TailwindCSS
- **Minimal, Clean Design** - Focused presentation that highlights work
- **Fully Responsive** - Optimized for desktop, tablet, and mobile
- **Masonry Layout** - Dynamic grid that adapts to different project image sizes
- **Dark Mode** - Built-in dark theme support
- **Easy Content Management** - Update all content via JSON file
- **Smooth Animations** - Professional transitions and interactions

---

## 📂 Project Organization

The portfolio organizes web development work into three categories:

- **Web Applications** - Interactive React apps and tools
- **Client Websites** - Full client sites (WordPress, Squarespace, Wix)
- **Landing Pages** - Marketing and product landing pages

Marketing and social media work is showcased separately on Behance via an integrated banner.

---

## 🎨 Site Structure

- **Hero Section** - Professional introduction with social links
- **Work Section** - Filterable project gallery (16 projects)
- **Behance Banner** - Link to marketing portfolio
- **Footer** - Contact and additional links

---

## 🛠 Tech Stack

**Frontend:**
- Next.js 12 - React framework for production
- React - Component-based UI
- TailwindCSS - Utility-first CSS framework
- React Masonry CSS - Dynamic grid layouts
- Next/Image - Optimized image loading

**Tools & Platforms:**
- Vercel - Deployment and hosting
- Git/GitHub - Version control
- imgbox - Image hosting

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/blordeus/my-react-portfolio.git
```

2. Navigate to project directory
```bash
cd my-react-portfolio
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Run development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📝 Customization

### Adding Projects

Projects are managed in `/data/portfolio.json`. Each project includes:

```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "HTML | CSS | JavaScript | React",
  "category": "web-apps | client-sites | landing-pages",
  "tags": ["Tag1", "Tag2"],
  "imageSrc": "https://image-url.com/image.png",
  "url": "https://project-url.com",
  "sourceUrl": "https://github.com/repo",
  "showSource": true
}
```

### Updating Hero Text

Edit the header taglines in `portfolio.json`:

```json
{
  "headerTaglineOne": "Hello,",
  "headerTaglineTwo": "I'm Bryan Lordeus -",
  "headerTaglineThree": "digital marketer and developer",
  "headerTaglineFour": "creating content, managing campaigns, and building websites."
}
```

### Changing Behance URL

Update the Behance link in `portfolio.json`:

```json
{
  "behanceUrl": "https://www.behance.net/your-username"
}
```

### Modifying Social Links

Edit the socials array in `portfolio.json`:

```json
{
  "socials": [
    { "id": "1", "title": "Github", "link": "https://github.com/username" },
    { "id": "2", "title": "LinkedIn", "link": "https://linkedin.com/in/username" }
  ]
}
```

---

## 📁 Project Structure

```
my-react-portfolio/
├── components/          # React components
│   ├── Header.js
│   ├── ProjectFilter.js
│   ├── ProjectGallery/
│   │   └── index.js
│   ├── WorkCard.js
│   ├── BehanceBanner.js
│   └── ...
├── pages/              # Next.js pages
│   ├── index.js        # Homepage
│   └── ...
├── data/               # Content data
│   └── portfolio.json  # All portfolio content
├── styles/             # Global styles
├── public/             # Static assets
└── animations/         # Animation utilities
```

---

## 🎨 Design Features

### Project Cards
- **Tech stack tags** - First 3 technologies displayed as blue pills
- **Always-visible CTAs** - "View Live" and GitHub buttons
- **Hover effects** - Subtle image zoom and shadow enhancement
- **Professional layout** - Clean separation of image, content, and actions

### Filter System
- **Four categories** - All Projects + 3 specific types
- **Smooth transitions** - Fade effect when switching filters
- **Active state** - Clear visual indicator for selected category
- **Mobile responsive** - Wraps appropriately on smaller screens

### Behance Banner
- **Eye-catching gradient** - Blue to purple gradient background
- **Clear messaging** - Directs to marketing portfolio
- **Prominent CTA** - Large, accessible button
- **Responsive design** - Adapts to all screen sizes

---

## 🎨 Color Customization

### Filter Buttons
In `/components/ProjectFilter.js`:
```javascript
// Change active button color (line 14)
bg-blue-600 → bg-purple-600, bg-green-600, etc.
```

### Behance Banner
In `/components/BehanceBanner.js`:
```javascript
// Change gradient (line 6)
from-blue-600 to-purple-600 → from-green-600 to-blue-600
```

### Card CTAs
In `/components/WorkCard.js`:
```javascript
// Change primary button (line 46)
bg-blue-600 → bg-purple-600, bg-green-600, etc.
```

---

## 📱 Responsive Breakpoints

- **Mobile:** < 700px (1 column)
- **Tablet:** 700px - 1100px (2 columns)
- **Laptop:** 1100px+ (3 columns)

Breakpoints are configured in `ProjectGallery/index.js`

---

## 🚢 Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

### Manual Deployment

1. Push changes to GitHub
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

2. Vercel automatically deploys from main branch

### Build Command
```bash
npm run build
# or
yarn build
```

---

## 🔄 Recent Updates

- ✅ Added category-based filtering system
- ✅ Redesigned project cards with tech tags
- ✅ Integrated Behance portfolio link
- ✅ Removed Services section for cleaner layout
- ✅ Updated hero copy for broader appeal
- ✅ Enhanced mobile responsiveness
- ✅ Optimized project data structure

---

## 📬 Contact

**Bryan Lordeus**
- Portfolio: [bryanlordeus.com](https://my-react-portfolio-six-alpha.vercel.app/)
- Email: imaginedbybryan@gmail.com
- LinkedIn: [linkedin.com/in/bryanlordeus](https://www.linkedin.com/in/bryanlordeus/)
- GitHub: [github.com/blordeus](https://github.com/blordeus)
- Behance: [View Marketing Work](https://www.behance.net/bryanlordeus)
- Music: [bryanlordeus.carrd.co](https://bryanlordeus.carrd.co/)

---

## 📄 License

This project is open source and available for personal use.

---

## 🙏 Acknowledgments

Built with Next.js, React, and TailwindCSS. Deployed on Vercel.