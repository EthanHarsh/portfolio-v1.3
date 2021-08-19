fetch('/api/v1/projects/featured')
  .then(response => response.json())
  .then((data) => {
      //console.log(data.data.projects);
      let i = 0
      data.data.projects.forEach(el => {
          //console.log(el);
          renderProjectCards(el, i);
          addFeatureClasses(el, i);
          i++;
      })
      localStorage.setItem('button', '#filter-featured');
});

$('#filter-featured').click(() => {
    //console.log('vanilla');
    fetch('/api/v1/projects/featured')
    .then(response => response.json())
    .then((data) => {
        let i = 0;
        renderProjectSection(data);
        renderButtons('#filter-featured');
        setTimeout(() => {
            console.log('timeout')
            data.data.projects.forEach(el => {
                console.log(el);
                addFeatureClasses(el, i);
                i++;
            })
        }, 200, data)

    });
})

$('#filter-all').click(() => {
    //console.log('vanilla');
    fetch('/api/v1/projects/all')
    .then(response => response.json())
    .then((data) => {
        //console.log(data.data.projects);
        renderProjectSection(data);
        renderButtons('#filter-all');
    });
})


$('#filter-vanilla').click(() => {
    //console.log('vanilla');
    fetch('/api/v1/projects/javascript')
    .then(response => response.json())
    .then((data) => {
        //console.log(data.data.projects);
        renderProjectSection(data);
        renderButtons('#filter-vanilla');
    });
})

$('#filter-node').click(() => {
    //console.log('vanilla');
    fetch('/api/v1/projects/node')
    .then(response => response.json())
    .then((data) => {
        //console.log(data.data.projects);
        renderProjectSection(data);
        renderButtons('#filter-node');
    });
})

$('#filter-html').click(() => {
    //console.log('vanilla');
    fetch('/api/v1/projects/html_css')
    .then(response => response.json())
    .then((data) => {
        //console.log(data.data.projects);
        renderProjectSection(data);
        renderButtons('#filter-html');
    });
})

function addFeatureClasses(project, i) {
    let id = '#project-' + i;
    //console.log('featureid=' + id)
    $(id).addClass('featured')
    console.log($(id));
}

function renderButtons(current) {
    let old = localStorage.getItem('button');
    $(old).removeClass('btn-primary');
    $(old).addClass('btn-outline-light');
    $(current).removeClass('btn-outline-light');
    $(current).addClass('btn-primary');
    localStorage.setItem('button', current);
}

function renderProjectSection(data) {
    $('#project-section').fadeOut(100, () => {
        $('#project-section').hide()
        $('#project-section').empty()
        let i = 0;
        data.data.projects.forEach(el => {
            //console.log(el);
            renderProjectCards(el, i);
            i++;
        })
        $('#project-section').fadeIn(100)
    })
}

function renderProjectCards(project, i) {
    let id = 'project-' + i;
    let item = `<div class="card ${project.slug}" id="${id}"><figure class="display-box"><img src="${project.heroimg}" alt="card-img"></figure><div class="info-box"><h3><strong>${project.name}</strong></h3><p class="hover-hide desc">${project.description}</p></div><a class="btn btn-primary text-white repo" href="${project.repo}">Git Repository</a><a class="btn btn-primary" href="${project.url}">View Project</a></div>`

    $('#project-section').append(item).hide().fadeIn(100);
        
}







