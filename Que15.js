const calculateDiscountPercentage = (originalPrize, discountPrize) => {
    const discountAmount = originalPrize - discountPrize
    const discountPercentage = (discountAmount / originalPrize) * 100
    const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100

    return roundedDiscountPercentage;
}

console.log(calculateDiscountPercentage(999, 10))