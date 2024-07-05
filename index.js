function showContent(category) {
    const allContent = document.querySelectorAll('div[id^="Hanzo"], div[id^="sub"], div[id^="cage"], div[id^="john"], div[id^="raiden"], div[id^="kang"]');
    allContent.forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById(category).style.display = 'block';
  }