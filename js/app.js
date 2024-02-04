const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones);
};

const displayPhones = (phones) => {
  // Get Element
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.textContent = "";
  phones.forEach((phone) => {
    // Create Element
    const cardDiv = document.createElement("div");
    cardDiv.classList = `card bg-base-100 shadow-xl p-4 m-4`;
    // Setting innerHTML
    cardDiv.innerHTML = `
      <figure>
        <img
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
};

//// Handle Search
const handleSearch = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
};
