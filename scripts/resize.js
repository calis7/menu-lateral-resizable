// Obtén las referencias de los elementos relevantes
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const resizeHandle = document.getElementById('resize-handle');

let isResizing = false;

// Guarda el ancho inicial del sidebar y la restricción máxima
let initialSidebarWidth = sidebar.offsetWidth;
const maxSidebarWidth = window.innerWidth * 0.5; // 80% del ancho del viewport

// Agrega un oyente de eventos para el clic en la flecha de redimensionamiento
resizeHandle.addEventListener('mousedown', (e) => {
    isResizing = true;

    // Evita la selección de texto mientras se redimensiona
    e.preventDefault();
    
    // Guarda la posición inicial
    const startX = e.clientX;

    // Agrega un oyente de eventos para seguir el movimiento del mouse
    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;

        // Calcula el cambio en la posición del mouse
        const deltaX = e.clientX - startX;

        // Calcula el nuevo ancho del sidebar
        let newSidebarWidth = initialSidebarWidth + deltaX;

        // Limita el ancho del sidebar al máximo definido
        if (newSidebarWidth > maxSidebarWidth) {
            newSidebarWidth = maxSidebarWidth;
        }

        // Establece el nuevo ancho del sidebar
        sidebar.style.width = newSidebarWidth + 'px';

        // Calcula y establece el nuevo ancho del contenido (el contenido se reduce cuando el sidebar se expande)
        content.style.width = `calc(100%)`;
    });

    // Agrega un oyente de eventos para soltar el clic del mouse
    document.addEventListener('mouseup', () => {
        isResizing = false;
        
        // Actualiza el ancho inicial del sidebar cuando se suelta el clic
        initialSidebarWidth = sidebar.offsetWidth;
    });
});



