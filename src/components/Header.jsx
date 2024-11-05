import { useEffect } from 'react';
import { useGetApiCustomerPortal } from '../apis/useGetApiCustomerPortal'

const Header = () => {

    const { data } = useGetApiCustomerPortal();

    console.log(data)

    useEffect(() => {
        if (data.logo) {
            // Actualiza el favicon
            const favicon = document.querySelector("link[rel='icon']");
            if (favicon) {
                favicon.href = data.logo;
            } else {
                const newFavicon = document.createElement("link");
                newFavicon.rel = "icon";
                newFavicon.href = data.logo;
                document.head.appendChild(newFavicon);
            }
        }

        if (data.title) {
            // Actualiza el título de la página
            document.title = data.title;
        }
    }, [data.logo, data.title]);

    return (
        <>
            {
                <div style={{ backgroundColor: `#${data.headerColorHEX}` }} className=" sticky top-0 h-16 justify-center flex items-center mb-5 shadow">
                    <a href=""><img src={data.logo} alt={data.logo} height={80} width={200} /></a>
                </div>
            }
        </>
    )

}

export default Header