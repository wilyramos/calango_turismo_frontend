
export default function FooterSection() {
   return (
      <footer className="bg-white text-green-800 py-6 border-t border-gray-300">
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
               Powered by{" "} <a 
                  href="https://wilyramos.github.io"
                  target="_blank" 
                  rel="noreferrer"  
                  >
                     wily ramos</a>
               ©
            </p>
         </div>
      </footer>
   );
}
