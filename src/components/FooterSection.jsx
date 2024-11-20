import SocialMedia from "./SocialMedia";

export default function FooterSection() {
   return (
      <footer className="bg-white text-green-800 py-6 border-t border-green-300">
         <div className="container mx-auto px-4 text-center">
            {/* Logo */}
            <div className="mb-4">
               <img
                  src="/images/logo.svg"
                  alt="Municipalidad Distrital de Calango"
                  className="w-20 mx-auto"
               />
            </div>

            {/* Texto y Redes */}
            <p className="text-sm mb-4">
               © {new Date().getFullYear()} Wily Ramos. Todos los derechos reservados.
            </p>
            <SocialMedia />
         </div>
      </footer>
   );
}
