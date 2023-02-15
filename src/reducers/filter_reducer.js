import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      console.log("filter reducer");

      let maxPrice = action.payload.reduce(
        (a, b) => (b.price > a ? b.price : a),
        0
      );

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: {
          ...state.filters,
          max_price: maxPrice,
          price: maxPrice,
        },
      };

    case SET_GRIDVIEW:
      return { ...state, grid_view: true };

    case SET_LISTVIEW:
      return { ...state, grid_view: false };

    case UPDATE_SORT:
      return { ...state, sort: action.payload };

    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];
      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return { ...state, filtered_products: tempProducts };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, company, category, color, price, shipping } = state.filters;

      let tempProduct = [...all_products];
      // filtering
      if (text) {
        tempProduct = tempProduct.filter((product) =>
          product.name.toLowerCase().startsWith(text.toLowerCase())
        );
      }
      if (company !== "all") {
        tempProduct = tempProduct.filter(
          (product) => product.company === company
        );
      }
      if (category != "all") {
        tempProduct = tempProduct.filter(
          (product) => product.category === category
        );
      }
      if (color !== "all") {
        tempProduct = tempProduct.filter((product) =>
          product.colors.includes(color)
        );
      }
      if (color !== "all") {
        tempProduct = tempProduct.filter((product) =>
          product.colors.includes(color)
        );
      }
      if (price) {
        tempProduct = tempProduct.filter((product) => product.price < price);
      }
      if (shipping) {
        tempProduct = tempProduct.filter((product) => product.shipping);
      }

      return { ...state, filtered_products: tempProduct };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
