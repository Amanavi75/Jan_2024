import React from "react";

const Projects = () => {
  return (
    <div className="py-36 max-w-6xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div class="flex flex-col gap-2">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
          <div>
            <h3 class="text-md font-medium text-gray-900 mt-2">Project 1</h3>
            <p class="text-sm font-regular text-gray-500 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus, elit vitae fermentum.
            </p>
          </div>
        </div><div class="flex flex-col gap-2">
        <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
          <div>
            <h3 class="text-md font-medium text-gray-900 mt-2">Project 1</h3>
            <p class="text-sm font-regular text-gray-500 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus, elit vitae fermentum.
            </p>
          </div>
        </div><div class="flex flex-col gap-2">
        <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
          <div>
            <h3 class="text-md font-medium text-gray-900 mt-2">Project 1</h3>
            <p class="text-sm font-regular text-gray-500 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus, elit vitae fermentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
