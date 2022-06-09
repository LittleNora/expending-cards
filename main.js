
var panelBoxs = document.querySelectorAll('.panel');
panelBoxs.forEach(function(panelBox) {
    panelBox.onclick = function() {
        let currentBoxActive = document.querySelector('.panel.active');
        currentBoxActive.classList.remove('active');
        panelBox.classList.add('active');
    }
})