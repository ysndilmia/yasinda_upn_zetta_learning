function bookPurchasing(book, discount, tax, stock, order){

    const price=book.price;
    const discountAmount=price*(discount/100);
    const priceAfterDiscount=price-discountAmount;
    const taxAmount=priceAfterDiscount*(tax/100);
    let totalDiscount = 0;
    let totalTax = 0;
    let subtotalBooksPrice = 0;
    let totalPriceAfterDiscount = 0;
    let totalPaymentPrice = 0;
    
    for(let index=0; index<order; index++){
        if(book && book.price && index<stock){
            totalDiscount += discountAmount;
            totalPriceAfterDiscount += priceAfterDiscount;
            subtotalBooksPrice += book.price;
            totalTax += taxAmount;
        }else{
            console.log("[Yah stok buku telah habis, kunjungi kami di lain waktu ya!]");
            console.log();
            break;
        }
    }

    totalPaymentPrice = totalPriceAfterDiscount + totalTax;

    if(book && book.price && order <= stock){
        console.group();
        console.log("Judul Buku                   :",book.title);
        console.log("Harga Buku                   : Rp",price);
        console.log("Jumlah Buku Yang Dibeli      :",order,"buah");
        console.log("Subtotal Buku                : Rp",subtotalBooksPrice);
        console.log("Diskon Buku                  : Rp",totalDiscount,"(",discount,"% )");
        console.log("Subtotal Buku Setelah Diskon : Rp",totalPriceAfterDiscount);
        console.log("PPN                          : Rp",totalTax,"(",tax,"% )");
        console.log("Total Pembayaran             : Rp",totalPaymentPrice);
        console.log("Sisa Stok Buku               :",stock-order,"buah");

        if (stock-order === 0){
            console.log("[Yah stok buku telah habis, kunjungi kami di lain waktu ya!]");
        }else{
            console.log("[Stok buku masih tersedia, ayo beli kembali!]");
        }
        console.log();
        console.groupEnd();
    }
    return totalPaymentPrice;
}
bookPurchasing({title: "Septihan", price: 99000, status: true},20,10,5,3);