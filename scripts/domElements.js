const blogChildren = document.querySelector('.section-blog-container').children
const ctaChildren = document.querySelector('.section-cta-container').children
const selectedElements = [...blogChildren, ...ctaChildren]
selectedElements.shift()

export default selectedElements