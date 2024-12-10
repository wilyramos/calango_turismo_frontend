import Hospedajes from '../components/Hospedajes';
import Restaurantes from '../components/Restaurantes';

export default function Hospedajesygastronomia() {
  const hospedajes = [
    {
      nombre: 'Hotel Paraíso',
      descripcion: 'Un hotel de lujo con vista al mar, ideal para relajarse y disfrutar del paisaje.',
      precio: 'Desde 40 soles',
      servicios: ['Piscina', 'Restaurante', 'Bar'],
      imagen: '/images/comida.jpg'
    },
    {
      nombre: 'Posada La Luna',
      descripcion: 'Alojamiento rústico en el corazón de la ciudad, con un ambiente acogedor y familiar.',
      precio: 'Desde 20 soles',
      servicios: ['Wi-Fi', 'Desayuno incluido', 'Terraza'],
      imagen: '/images/posada_luna.jpg'
    },
    {
      nombre: 'Hostal Sol y Mar',
      descripcion: 'Un hostal económico, perfecto para mochileros y viajeros que buscan comodidad y buen precio.',
      precio: 'Desde 10 soles',
      servicios: ['Cocina compartida', 'Lavandería', 'Recepción 24 horas'],
      imagen: '/images/hostal_sol_mar.jpg'
    }
  ];

  const restaurantes = [
    {
      nombre: 'Restaurante El Mar',
      descripcion: 'Cocina de mariscos frescos con una vista espectacular al océano.',
      imagen: '/images/restaurante_mar.jpg',
      tipo: ['Mariscos', 'Pescados', 'Comida Peruana'],
      horario: ['Lunes a Domingo: 12:00 pm - 10:00 pm']
    },
    {
      nombre: 'La Cocina de Mi Abuela',
      descripcion: 'Comida tradicional local con recetas caseras y un ambiente acogedor.',
      imagen: '/images/cocina_abuela.jpg',
      tipo: ['Comida Criolla', 'Menú del Día', 'Postres'],
      horario: ['Lunes a Sábado: 8:00 am - 8:00 pm']
    },
    {
      nombre: 'Bistro Gourmet',
      descripcion: 'Restaurante de alta cocina con un menú exclusivo y elegante.',
      imagen: '/images/bistro_gourmet.jpg',
      tipo: ['Café', 'Pastelería', 'Comida Gourmet'],
      horario: ['Martes a Domingo: 10:00 am - 9:00 pm']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-light text-center mb-6 text-gray-800">Hospedajes y Restaurantes</h1>

      <div className="space-y-12">
        {/* Sección de Hospedajes */}
        <Hospedajes />

        {/* Sección de Restaurantes */}

        <Restaurantes />
        
      </div>
    </div>
  );
}
