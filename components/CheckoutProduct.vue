<template>
   <div class=" flex py-2 border-bottom border-gray-900">
      <div class="flex-grow-0 flex-shrink-0 mr-2 object-contain w-56  ">
        <img
          src={image}
          height={200}
          width={200}
          objectFit="contain"
          class="object-contain w-full"
        />
      </div>

      <!-- {/* middle */} -->

      <div class="font-semibold text-lg; color: rgba(92, 94, 94, 1);">
        <div class="flex flex-col">
          <p>{title}</p>

          <p class="hidden flex-shrink lg:inline-flex text-xs my-2 line-clamp-3  ">
            {description}
          </p>
          <Currency quantity={price} />
          <!-- {hasPrime && (
            <div class="flex items-center space-x-2">
              <img
                loading="lazy"
                class="w-12"
                src="https://links.papareact.com/fdw"
                alt=""
              />
              <p class="text-xs text-gray-500">Free Next-Day Delivery</p>
            </div>
          )} -->
          $55
        </div>

        <div class="flex  flex-col-2   justify-center  ">
          <div class="flex  justify-evenly items-center ">
            <span>
              <!-- {" "} -->
              <!-- <ArrowCircleUpIcon
                class="h-10 mx btn_arrow cursor-pointer"
                onClick={increaseProduct}
              /> -->
              up
            </span>
            <span class="font-bold">{quantity}</span>
            <span>
              <!-- <ArrowCircleDownIcon
                class="h-10 btn_arrow cursor-pointer"
                onClick={decrementProduct}
              /> -->
              down
            </span>
            <button class="btn " onClick={removeItemFromBasket}>
              Remove from Basket
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
