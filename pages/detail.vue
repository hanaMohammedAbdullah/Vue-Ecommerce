<template>
  <div>
    <Header />
    <div class="">
      <div class="flex-col  md:flex mx-4 justify-between items-end my-16">
       <h1 class="block text-center  font-bold text-2xl my-5 capitalize md:hidden ">the atomic habit book</h1>
          <!-- image photo -->
        <div class="mx-auto flex md:mx-6">

          <div class="flex items-center hover:bg-gray-200">
            <button>
              <img
                class="h-5 text-white"
                src="../Asset/Icon/left-arrow.png"
                alt="left-arrow"
              />
            </button>
          </div>
          <div>
            <img
              class="m-auto    w-48 object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdieUkr3rBBHKIvqRzYewH6RATcNoWy7TK9Q&usqp=CAU"
              alt="the book of "
            />
          </div>

          <div class="mx-0 flex items-center hover:bg-gray-200">
            <button>
              <img
                class="h-5 text-white"
                src="../Asset/Icon/right-arrow.png"
                alt="right-arrow"
              />
            </button>
          </div>
        </div>
          <!-- start description -->
        <div class="w-full md:w-3/6">
          <h1 class=" hidden text-lg  md:font-bold md:text-2xl capitalize">the atomic habit book</h1>
          <p>the author : tomas shelbe</p>
          <!-- start ratin -->
          <div class="flex">
            <span
              ><img class="h-5" src="../Asset/Icon/filledStar.png" alt="" />
            </span>
            <span
              ><img class="h-5" src="../Asset/Icon/filledStar.png" alt="" />
            </span>
            <span
              ><img class="h-5" src="../Asset/Icon/filledStar.png" alt="" />
            </span>
            <span
              ><img class="h-5" src="../Asset/Icon/filledStar.png" alt="" />
            </span>
            <span
              ><img class="h-5" src="../Asset/Icon/outlineStar.png" alt="" />
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, ad!
            Laboriosam commodi consequatur iste quae rem? Labore ab provident
            non voluptatibus eos,
            <span class=""
              >voluptatem at. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus asperiores quae est, delectus nihil sapiente
              cumque, recusandae omnis excepturi dolore quam similique debitis
              totam sed ut modi aliquid vero quo. Corrupti suscipit quae
              voluptatum. Mollitia, quos! , Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Nemo exercitationem debitis neque
              accusantium dolore tempore beatae alias facere, cumque, voluptates
              facilis deleniti voluptate quasi earum fugiat ex vitae quos
              blanditiis!</span
            >
          </p>
        </div>
        <div
          class="  m-auto md:m-0    w-48 flex-col justify-start border-2 border-gray-500 h-32 border-2 rounded-lg"
        >
          <div class="mt-2 mb-6 text-center">
            <p>Buy by price: $99.99</p>
            <p>Delivery way : pdf</p>
          </div>
          <div class="flex justify-center">
            <button
              class="rounded border-solid font-bold cursor-pointer items-end font-semibold h-8 w-36 bg-yellow-300"
            >
              add to card
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Product details -->
    <div class="">
      <hr class="shadow-md" />
      <div class=" ml-4">
      <h1 class="font-bold text-2xl mb-2">Product details</h1>
      <div class="ml-4 text-sm space-y-2 mb-4">

      <p><span class="font-bold">ASIN  : </span>B0B82QYNQL</p>
      <p>Publication date : July 28, 2022</p>
      <p>Language : Arabic</p>
      <p>File size : 66964 KB</p>
      <p>Text-to-Speech : Not enabled</p>
      <p>Enhanced typesetting : Enabled</p>
      <p>Word Wise : Not Enabled</p>
      <p>Print length : 728 pages</p>
      <p>Lending : Enabled</p>
      </div>
      </div>
    </div>
    <VideoLIst />

    <Review />
    <Footer />
  </div>
</template>
