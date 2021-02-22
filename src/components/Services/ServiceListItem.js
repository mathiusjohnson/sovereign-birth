import React from 'react';
import insertHere from '../../assets/images/Insert-Photo-Here.jpg';

const ServiceListItem = ({service}) => {
  return (
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article class="overflow-hidden rounded-lg shadow-lg">

        <a href="/home">
          <img class="block h-auto w-full max-h-44 object-cover"  src={service.image} alt="insert here text"></img>
        </a>

        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 class="text-lg">
            <a class="no-underline hover:underline text-black" href="/home">
             {service.name}
            </a>
          </h1>
        </header>

        <footer class="flex justify-between leading-5 p-2 md:p-4 h-40">
          <p className="">{service.description}</p>
        </footer>

      </article>
    </div>
  );
};

export default ServiceListItem;