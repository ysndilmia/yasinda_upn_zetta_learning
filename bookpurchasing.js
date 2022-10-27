function bookPurchasing(book, discount, tax){
    if(book && book.price){
        const price=book.price;
        const discountAmount=price*(discount/100);
        const priceAfterDiscount=price-discountAmount;
        const taxAmount=priceAfterDiscount*(tax/100);
        const priceAfterTax=priceAfterDiscount+taxAmount;

        console.group();
        console.log("Judul Buku                 :",book.title);
        console.log("Harga Buku                 : Rp",price);
        console.log("Diskon Buku                : Rp",discountAmount,"(",discount,"% )");
        console.log("Harga Buku Setelah Diskon  : Rp",priceAfterDiscount);
        console.log("PPN                        : Rp",taxAmount,"(",tax,"% )");
        console.log("Total Pembayaran           : Rp",priceAfterTax);
        console.log();
        console.groupEnd();
    }
    return 0;
}
bookPurchasing({title: "Septihan", price: 99000, status: true},20,10);