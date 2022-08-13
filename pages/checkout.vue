<template>
<div>
<Header />
<div class=" bg-gray-100 min-h-screen">
      <!-- <Header /> -->
      <main class=" lg:flex max-w-screen-2xl mx-auto  ">
        <!-- {/* Left Section */} -->
        <div class=" m-5 flex-grow shadow-sm">
          <div class="flex flex-col p-5 space-y-10 bg-white">
            <h1 class=" text-3xl border-b p-4 ">
             Your Amazon Cart is empty
            </h1>

            <!-- adding the card  -->
            <checkout-product></checkout-product>

          </div>
        </div>

        <!-- {/* Right Section */} -->

        <div
          class='mb-5  mt-5 flex flex-col w-96 h-40 bg-white p-10 shadow-md  '
        >
            <h2 class="whitespace-nowrap">
              Subtotal ({getCount()}) items: $4
              <span class="font-bold">
                <!-- <Currency quantity={total} /> -->
              </span>
            </h2>
            <button
              role="link"
              class="button_proceed  mt-2
                from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"

            >
              <!-- {!session ? "Sign in to Checkout" : "Proceed to checkout"} -->
              Proceed to checkout
            </button>
        </div>
      </main>
      </div>

<Footer />

</div>
</template>
