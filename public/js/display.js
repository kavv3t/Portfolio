function display(number) {
  const section = {
    sectionA: document.querySelector('.accueil'),
    sectionB: document.querySelector('.apropos'),
    section1: document.querySelector('.firstSec1'),
    section2: document.querySelector('.firstSec2'),
    section3: document.querySelector('.firstSec3'),
    section4: document.querySelector('.firstSec4'),
    section5: document.querySelector('.firstSec5'),
    section6: document.querySelector('.firstSec6'),
    section7: document.querySelector('.exper'),
    section8: document.querySelector('.contact'),
  }

  switch (number) {
    case 'a':
      section.sectionA.style.display = 'grid';
      section.sectionB.style.display = 'none';
      break;
    case 'b':
      section.sectionA.style.display = 'none';
      section.sectionB.style.display = 'grid';
      break;
    case 1:
      section.section1.style.display = 'grid';
      section.section2.style.display = 'none';
      section.section3.style.display = 'none';
      section.section4.style.display = 'none';
      section.section5.style.display = 'none';
      section.section6.style.display = 'none';
      break;
    case 2:
      section.section1.style.display = 'none';
      section.section2.style.display = 'grid';
      section.section3.style.display = 'none';
      section.section4.style.display = 'none';
      section.section5.style.display = 'none';
      section.section6.style.display = 'none';
      break;
    case 3:
      section.section1.style.display = 'none';
      section.section2.style.display = 'none';
      section.section3.style.display = 'grid';
      section.section4.style.display = 'none';
      section.section5.style.display = 'none';
      section.section6.style.display = 'none';
      break;
    case 4:
      section.section1.style.display = 'none';
      section.section2.style.display = 'none';
      section.section3.style.display = 'none';
      section.section4.style.display = 'grid';
      section.section5.style.display = 'none';
      section.section6.style.display = 'none';
      break;
    case 5:
      section.section1.style.display = 'none';
      section.section2.style.display = 'none';
      section.section3.style.display = 'none';
      section.section4.style.display = 'none';
      section.section5.style.display = 'grid';
      section.section6.style.display = 'none';
      break;
    case 6:
      section.section1.style.display = 'none';
      section.section2.style.display = 'none';
      section.section3.style.display = 'none';
      section.section4.style.display = 'none';
      section.section5.style.display = 'none';
      section.section6.style.display = 'grid';
      break;
    case 7:
      section.section7.style.display = 'grid';
      section.section8.style.display = 'none';
      break;
    case 8:
      section.section7.style.display = 'none';
      section.section8.style.display = 'grid';
      break;
  }
};