const isEven = (i) =>  i % 2 === 0

function addObserver(elements) {
  const observerOptions = 
      {
          root: null, 
          treshold: 0, 
          rootMargin: "0px 0px -200px 0px"
      }
  const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
          if (!entry.isIntersecting) return
          entry.target.classList.add(isEven(entry.target.index) ? 'load-right' : 'load-left')
          observer.unobserve(entry.target)
      })
  }, observerOptions)
  
  elements.forEach(element => { observer.observe(element) })
}

export function addScrollAnimation(elements) {
    let i = 0
    elements.forEach(element => {
        element.index = i
        element.classList.add(isEven(element.index % 2) ? 'lazy-right' : 'lazy-left')
        i++
    })
    addObserver(elements)
}

