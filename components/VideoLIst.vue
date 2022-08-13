<template>
  <div class="py-4 h-72 mt-3">
    <hr class="w-4/5 text-lg" />
    <div class="flex justify-between m-3">
      <div class="mx-0 flex items-center hover:bg-gray-500">
        <button>
          <img
            class="h-14 text-white w-6"
            src="../Asset/Icon/left-arrow.png"
            alt="left-arrow"
          />
        </button>
      </div>
      <!-- list video scroll -->
      <div class="flex overflow-x-auto">
        <!-- video -->
        <iframe
          class="h-48 w-64 mx-2   md:w-96 md:h-52 rounded-md"
          src="https://www.youtube.com/embed/YT7tQzmGRLA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <!-- video -->
        <iframe
          class="h-48 w-64 mx-2   md:w-96 md:h-52  rounded-md"
          src="https://www.youtube.com/embed/YT7tQzmGRLA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <!-- video -->
        <iframe
          class=" h-48 w-64 mx-2   md:w-96 md:h-52  rounded-md"
          src="https://www.youtube.com/embed/YT7tQzmGRLA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="mx-0 flex items-center hover:bg-gray-500">
        <button>
          <img
            class="h-14 text-white w-6"
            src="../Asset/Icon/right-arrow.png"
            alt="right-arrow"
          />
        </button>
      </div>
    </div>
  </div>
</template>
