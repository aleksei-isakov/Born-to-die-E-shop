function sortGroupsBySellerName(groupList) {
  return groupList.sort(
    ({ seller: { name: aName } }, { seller: { name: bName } }) => {
      if (aName === bName) {
        return 0;
      }

      return aName < bName ? -1 : 1;
    }
  );
}

function getProductsGroupedBySeller(productList) {
  const groupList = productList.reduce((acc, product) => {
    const sellerGroup = acc.find((el) => el.seller.id === product.seller.id);

    if (sellerGroup) {
      sellerGroup.products.push(product);
    } else {
      const newSellerGroup = {
        seller: product.seller,
        products: [product]
      };

      acc.push(newSellerGroup);
    }

    return acc;
  }, []);

  return sortGroupsBySellerName(groupList);
}

export default getProductsGroupedBySeller;
