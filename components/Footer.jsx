export const Footer = ({ title, description }) => {
    return (
        <footer class="text-center w-full py-4 bg-forestgreen-default m-0">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                   
                    <span class="self-center text-5xl font-jomhuria whitespace-nowrap text-ivory-default tracking-wide px-6 md:px-20 g:px-40 ">Bruktglede</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-ivory-default sm:mb-0 px-6 md:px-20 ">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Om oss</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                   
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 opacity-60" />
            <span class="block text-sm text-ivory-default sm:text-center ">Nettsiden er utviklet av Lisa Mari Myrene, Anosh Chaudhry og Alexandra Vanje, på vegne av Bacheloroppgave i Webutvikling ved NTNU. </span>
        </div>
    </footer>
        
    );
};