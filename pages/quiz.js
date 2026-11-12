function evaluarQuiz() {
            const respuestasCorrectas = {
                p1: "B",
                p2: "B",
                p3: "A",
                p4: "B",
                p5: "B"
            };

            let puntos = 0;
            let total = 5;
            let respondidas = 0;

            for (let i = 1; i <= total; i++) {
                const radios = document.getElementsByName('p' + i);
                for (const radio of radios) {
                    if (radio.checked) {
                        respondidas++;
                        if (radio.value === respuestasCorrectas['p' + i]) {
                            puntos++;
                        }
                    }
                }
            }

            const box = document.getElementById('resultadoBox');
            box.style.display = 'block';

            if (respondidas < total) {
                box.className = 'resultado-quiz resultado-regular';
                box.innerHTML = 'Responde a las 5 preguntas antes de enviar.';
                return;
            }

            if (puntos === total) {
                box.className = 'resultado-quiz resultado-exito';
                box.innerHTML = 'Acertaste ' + puntos + ' de ' + total + ' preguntas (100%). ¡Conoces muy bien al Beato Ignacio Casanovas!';
            } else {
                box.className = 'resultado-quiz resultado-regular';
                box.innerHTML = 'Acertaste ' + puntos + ' de ' + total + ' preguntas. ¡Repasa las secciones para conseguir el 100%!';
            }
        }