const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
  // Get Element
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.textContent = "";

  const btnShowAll = document.getElementById("btn-show-all");
  if (phones.length > 12) {
    btnShowAll.classList.remove("hidden");
  } else {
    btnShowAll.classList = "hidden";
  }

  // Display first 12 phones
  phones = phones.slice(0, 12);
  phones.forEach((phone) => {
    // Create Element
    const cardDiv = document.createElement("div");
    cardDiv.classList = `card bg-base-100 shadow-xl p-4 m-4`;
    // Setting innerHTML
    cardDiv.innerHTML = `
      <figure>
        <img
          class="pt-8"
          src="${phone.image}"
          alt="Phone"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    `;
    // Append Child
    phonesContainer.appendChild(cardDiv);
  });
  toggleLoadingSpinner(false);
};

//// Handle Search
const handleSearch = () => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhone(searchText);
};

//// Loading Spinner
const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};
