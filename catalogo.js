const CAT=`Pintura|Pintura látex interior (2 manos)|m²
Pintura|Pintura látex exterior / frente|m²
Pintura|Pintura de cielorraso|m²
Pintura|Enduido y lijado de paredes|m²
Pintura|Fijador / sellador|m²
Pintura|Tratamiento de humedad y hongos|m²
Pintura|Raspado y retiro de pintura floja|m²
Pintura|Esmalte sintético en puertas|un
Pintura|Esmalte en ventanas y aberturas|un
Pintura|Pintura de rejas / portón|m²
Pintura|Pintura de zócalos|ml
Pintura|Impermeabilizante de techo / terraza|m²
Pintura|Barniz / lasur en madera|m²
Pintura|Hidrolavado de fachada|m²
Pintura|Protección de pisos y muebles|gl
Electricidad|Boca de luz (punto)|un
Electricidad|Tomacorriente nuevo|un
Electricidad|Llave de luz / interruptor|un
Electricidad|Tablero seccional completo|un
Electricidad|Disyuntor diferencial|un
Electricidad|Llave térmica|un
Electricidad|Puesta a tierra (jabalina)|un
Electricidad|Tendido de cable embutido|ml
Electricidad|Canalización con caño corrugado|ml
Electricidad|Instalación de plafón / luminaria|un
Electricidad|Instalación de ventilador de techo|un
Electricidad|Tira LED|ml
Electricidad|Reflector exterior|un
Electricidad|Portero / timbre eléctrico|un
Electricidad|Línea dedicada (aire / horno)|un
Electricidad|Conexión de termotanque eléctrico|un
Electricidad|Revisión y diagnóstico eléctrico|gl
Electricidad|Pilar / conexión de medidor|un
Aire acondicionado|Instalación split hasta 3000 frig|un
Aire acondicionado|Instalación split 4500–6000 frig|un
Aire acondicionado|Instalación split inverter|un
Aire acondicionado|Cañería frigorífica adicional|ml
Aire acondicionado|Soporte unidad exterior|un
Aire acondicionado|Carga de gas refrigerante|un
Aire acondicionado|Limpieza y mantenimiento de equipo|un
Aire acondicionado|Diagnóstico y reparación|hs
Aire acondicionado|Desinstalación de equipo|un
Aire acondicionado|Reubicación de equipo|un
Aire acondicionado|Bomba de drenaje|un
Aire acondicionado|Perforación de pared|un
Aire acondicionado|Vacío y prueba de estanqueidad|un
Aire acondicionado|Canaleta y cable de interconexión|ml
Aire acondicionado|Cambio de capacitor / placa|un
Partes de la casa|Medianera – pintura y reparación|m²
Partes de la casa|Medianera – impermeabilización|m²
Partes de la casa|Persiana – pintura|un
Partes de la casa|Persiana – cambio de cinta / tambor|un
Partes de la casa|Frente / fachada|m²
Partes de la casa|Cielorraso|m²
Partes de la casa|Paredes interiores|m²
Partes de la casa|Techo / terraza|m²
Partes de la casa|Puertas|un
Partes de la casa|Ventanas / aberturas|un
Partes de la casa|Rejas y portones|un
Partes de la casa|Baño|gl
Partes de la casa|Cocina|gl
Partes de la casa|Escalera|gl
Partes de la casa|Galería / quincho|gl
Partes de la casa|Balcón|gl
Partes de la casa|Cochera|gl
Partes de la casa|Pared con humedad|m²
General|Mano de obra por hora|hs
General|Jornal (día de trabajo)|día
General|Materiales|gl
General|Flete y traslado|un
General|Visita técnica / relevamiento|un
General|Andamio / escalera|día
General|Retiro de escombros|gl`.split('\n').map(l=>{const[c,n,u]=l.split('|');return{c,n,u}});
