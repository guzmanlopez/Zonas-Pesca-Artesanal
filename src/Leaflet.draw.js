/*
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */

L.drawVersion = '0.2.4-dev';

L.drawLocal = {
	draw: {
		toolbar: {
			actions: {
				title: 'Cancelar dibujo',
				text: 'Cancelar'
			},
			undo: {
				title: 'Borrar último punto dibujado',
				text: 'Borrar último punto'
			},
			buttons: {
				polyline: 'Dibujar línea',
				polygon: 'Dibujar polígono',
				rectangle: 'Dibujar rectángulo',
				circle: 'Dibujar círculo',
				marker: 'Dibujar marcador'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: 'Clic y arrastrar para dibujar círculo'
				},
				radius: 'Radio'
			},
			marker: {
				tooltip: {
					start: 'Clic en mapa para ubicar marcador'
				}
			},
			polygon: {
				tooltip: {
					start: 'Clic para empezar a dibujar figura',
					cont: 'Clic para continuar dibujando figura',
					end: 'Clic en primero punto para cerrar la figura'
				}
			},
			polyline: {
				error: '<strong>Error:</strong> los bordes de la figura no se pueden cruzar!',
				tooltip: {
					start: 'Clic para empezar a dibujar una línea',
					cont: 'Clic para continuar dibujando una línea. Tecla "Esc" para salir',
					end: 'Clic en último punto para terminar la línea. Tecla "Esc" para salir'
				}
			},
			rectangle: {
				tooltip: {
					start: 'Clic y arrastrar para dibujar un rectángulo'
				}
			},
			simpleshape: {
				tooltip: {
					end: 'Soltar mouse para terminar de dibujar'
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: 'Guardar cambios',
					text: 'Guardar'
				},
				cancel: {
					title: 'Cancelar edición, desechar todos los cambios',
					text: 'Cancelar'
				}
			},
			buttons: {
				edit: 'Editar capas',
				editDisabled: 'No hay capas para editar',
				remove: 'Borrar capas',
				removeDisabled: 'No hay capas para borrar'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: 'Arrastrar centro o nodo para editar elemento',
					subtext: 'Clic cancelar para deshacer cambios'
				}
			},
			remove: {
				tooltip: {
					text: 'Clic en elemento para remover'
				}
			}
		}
	}
};
