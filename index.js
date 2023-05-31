const { fifaData } = require('./fifa.js')


/* Görev 1: 
	Verilen datayı parçalayarak aşağıdaki verileri (console.log-ing) elde ederek pratik yapın. 
	
	💡 İPUCU: Öncelikle datayı filtrelemek isteyebilirsiniz */

//(a) 2014 Dünya kupası Finali Evsahibi takım ismi (dizide "Home Team Name" anahtarı)
//const sonuc = fifaData.filter((yil) => yil.Year===2014 ).filter((finalMi) => finalMi.Stage === "Final");
const fifa2014 = fifaData.filter((mac) => {return mac.Year === 2014 && mac.Stage ==="Final";});

const fifa20142 = fifaData.filter((mac) => mac.Year === 2014 && mac.Stage ==="Final");
//console.log(sonuc[0]["Home Team Name"]);
console.log("a-fifa2014 : ",fifa2014[0]["Home Team Name"]);
//(b) 2014 Dünya kupası Finali Deplasman takım ismi  (dizide "Away Team Name" anahtarı)
console.log("b- : ",fifa2014[0]["Away Team Name"]);
//(c) 2014 Dünya kupası finali Ev sahibi takım golleri (dizide "Home Team Goals" anahtarı)
console.log("c- : ",fifa2014[0]["Home Team Goals"]);
//(d)2014 Dünya kupası finali Deplasman takım golleri  (dizide "Away Team Goals" anahtarı)
console.log("d- : ",fifa2014[0]["Away Team Goals"]);
//(e) 2014 Dünya kupası finali kazananı*/
const takim1 = fifa2014[0]["Home Team Goals"];
const takim2 = fifa2014[0]["Away Team Goals"];
if(takim1>takim2){
	console.log("e- 2014 Dünya kupası finali kazananı : " ,fifa2014[0]["Home Team Name"]);
}else{
	console.log("e- 2014 Dünya kupası finali kazananı : " ,fifa2014[0]["Away Team Name"]);
}


/*  Görev 2: 
	Finaller adlı fonksiyonu kullanarak aşağıdakileri uygulayın:
	1. Bir dizi(array) olan Fifa datasını fonksiyonun birinci parametresi olarak alacak
	2. Sadece final maçlarını içeren nesnenin(object) datalarını filtreleyerek, bir dizi olarak döndürecek(return)
	
	💡 İPUCU - verilen data içindeki nesnelerin(objects) "Stage" anahtarına bakmalısınız
*/

function Finaller(fifaDizisi) {
    /* kodlar buraya */
	//const finalArr = fifaDizisi.filter((finalMi) => finalMi.Stage === "Final");
	//return finalArr;
	return fifaDizisi.filter(
		(mac) => mac.Stage === "Final"
	);

}
console.log("görev-2 : ", Finaller(fifaData));


/*  Görev 3: 
	Bir higher-order fonksiyonu olan Yillar isimli fonksiyona aşağıdakileri uygulayın: 
	1. fifaData dizisini(array) fonksiyonun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Finaller data setindeki tüm yılları içeren "years" adındaki diziyi(array) döndürecek
	*/

function Yillar(fifaDataDizisi,callFinaller) { 
    /* kodlar buraya */
	
	//const finalYillari = fifaDataDizisi.filter(callFinaller).map((yillar) => yillar.Year);
	const finaldeger = callFinaller(fifaDataDizisi).map((yillar) =>yillar.Year);
	return finaldeger;
	
}
console.log("görev 3 : ",Yillar(fifaData,Finaller));

/*  Görev 4: 
	Bir higher-order fonksiyonunu olan Kazananlar isimli fonksiyona aşağıdakileri uygulayın:  
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Her final maçının kazananını (evsahibi ya da deplasman) belirleyecek
	💡 İPUCU: Beraberlikler(ties) için şimdilik endişelenmeyin (Detaylı bilgi için README dosyasına bakabilirsiniz.)
	4. Tüm kazanan ülkelerin isimlerini içeren `kazananlar` adında bir dizi(array) döndürecek(return)  */ 

function Kazananlar(fifaAr,callFinaller) {
    /* kodlar buraya */
	 //const kazananEvArr = fifaAr.filter(callFinaller);
	// const kazananDepArr = fifaArr.filter(callFinaller).filter((deger) => (deger["home Team Goals"] < deger["Away Team Goals"] ));
	// const kazananberArr = fifaArr.filter(callFinaller).filter((deger) => (deger["home Team Goals"] === deger["Away Team Goals"] ));
	
	//return kazananEvArr;
	const finalMaclar = callFinaller(fifaAr);

	const kazananlar =finalMaclar.map((mac)=> {
		//console.log(mac["Home Team Goals"], mac["Away Team Goals"]);
		if(mac["Home Team Goals"]>mac["Away Team Goals"]){
			return mac["Home Team Name"];
		}else{
			return mac["Away Team Name"];
		}
	});
	return kazananlar;
}
console.log("görev 4 :" ,Kazananlar(fifaData,Finaller));

/*  Görev 5: 
	Bir higher-order fonksiyonu olan YillaraGoreKazananlar isimli fonksiyona aşağıdakileri uygulayın:
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Görev 3'de yazdığınız Yillar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun üçüncü parametresi olarak alacak
	4. Görev 4'de yazdığınız Kazananlar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun dördüncü parametresi olarak alacak
	5. Her yıl için "{yıl} yılında, {ülke} dünya kupasını kazandı!" cümlesini(string) içeren bir diziyi(array) döndürecek
	
	💡 İPUCU: her cümlenin adım 4'te belirtilen cümleyle birebir aynı olması gerekmektedir.
*/

function YillaraGoreKazananlar(fifaArrr,finalcall,yilcall,kazanancall) {
/* kodlar buraya */
	const finalMaclar = finalcall(fifaArrr);
	const yillarDizisi = yilcall(finalMaclar,finalcall);
	const kazananlardizi = kazanancall(finalMaclar,finalcall);

	//console.log("yillara göre kısmi datalar :",finalMaclar,yillarDizisi,kazananlardizi);
	
	const sonuclarMetin = finalMaclar.map((mac,index) => {return `${yillarDizisi[index]} yılında, ${kazananlardizi[index]} dünya kupasını kazandı!`; });
return sonuclarMetin;
}
//YillaraGoreKazananlar(fifaData,Finaller,Yillar,Kazananlar);
console.log("Görev-5",YillaraGoreKazananlar(fifaData,Finaller,Yillar,Kazananlar)) ;


/*  Görev 6: 
	Bir higher order fonksiyonu olan `OrtalamaGolSayisi` isimli fonksiyona aşağıdakileri uygulayın: 
	1. Görev 2'de yazdığınız `Finaller` fonksiyonunu birinci parametre olarak alacak; 'fifaData' dizisini argüman olarak eklediğinizden emin olun
	
	💡 İPUCU: Çağırma örneği: `OrtalamaGolSayisi(Finaller(fifaData));`
	
	2. Her maç için Ortalama toplam evsahibi gol sayısı ve toplam deplasman gol sayısını hesaplayacak (her maçta atılan toplam gol sayısı)
	
	3. Sonucun 2. ondalığını yuvarlayıp, bulunan değeri döndürecek(return)
	
	💡 İPUCU: .reduce, .toFixed (dizilim(syntax) için MDN'ye bakın) kullan, ve bunu 2 adımda yapın) 
	
*/

function OrtalamaGolSayisi(callbackFn) {
    /* kodlar buraya */
	const macBasiToplamGol = callbackFn.map((mac) => {
		return mac["Home Team Goals"] + mac["Away Team Goals"];
	});

	const toplamGol =macBasiToplamGol.reduce((toplam,macGol) => {return toplam+macGol ; },0);
	
	return (toplamGol/ macBasiToplamGol.length).toFixed(2);
}
//console.log("Görev- 6 : ",OrtalamaGolSayisi(Finaller(fifaData)));


/// EKSTRA ÇALIŞMALAR ///

/*  BONUS 1:  
	`UlkelerinKazanmaSayilari` isminde bir fonksiyon oluşturun, parametre olarak `data` ve `takım kısaltmalarını` alacak ve hangi ülkenin kaç dünya kupası olduğunu döndürecek
	
	İpucu: "takım kısaltmaları" (team initials) için datada araştırma yapın!
İpucu: `.reduce` Kullanın*/
// "Home Team Initials": "URU",
//     "Away Team Initials": "ARG"
function UlkelerinKazanmaSayilari(data , takimKisaltmalari) {
    /* kodlar buraya */
	const finaldatasi = data.filter((mac) => mac.Stage ==="Final");
	const kazananTakimlar = finaldatasi.map((mac)=> {
		if(mac["Home Team Goals"]>mac["Away Team Goals"]){
			return mac["Home Team Initials"];
		}else{
			return mac["Away Team Initials"];
		}
	});
	console.log(kazananTakimlar);
	const hangiTakimKacKezKazandi = kazananTakimlar.reduce((sayi,Dizidegeri)=> {
		//console.log(sayisi);
		if(Dizidegeri === takimKisaltmalari){
			return sayi+1;
		}else{
			return sayi;
		}
		
	},0)
	//console.log(hangiTakimKacKezKazandi);
	return `Takım kısaltması ${takimKisaltmalari} olan takım ${hangiTakimKacKezKazandi} kez kazandı.`;
}
console.log("BONUS-1 :", UlkelerinKazanmaSayilari(fifaData,"ARG"));


/*  BONUS 2:  
EnCokGolAtan() isminde bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupası finallerinde en çok gol atan takımı döndürsün */

function EnCokGolAtan(fifaData2) {
    /* kodlar buraya */
	const finaldatasi = fifaData2.filter((mac) => mac.Stage ==="Final");
	let enCokGolAtanTakim ="";
	let golSayisi = 0;
	for (let i in finaldatasi){
		if(finaldatasi[i]["Home Team Goals"]>finaldatasi[i]["Away Team Goals"]&&finaldatasi[i]["Home Team Goals"]>golSayisi){
			enCokGolAtanTakim = finaldatasi[i]["Home Team Name"];
			golSayisi = finaldatasi[i]["Home Team Goals"];
		}else if (finaldatasi[i]["Away Team Goals"]>golSayisi){
			enCokGolAtanTakim = finaldatasi[i]["Away Team Name"];
			golSayisi = finaldatasi[i]["Away Team Goals"];
		}
	}
	//console.log(enCokGolAtanTakim,golSayisi);
	return `En çok gol atan takım ${enCokGolAtanTakim} attığı gol sayısı ${golSayisi}`;
}
console.log("BONUS-2 :" , EnCokGolAtan(fifaData));

/*  BONUS 3: 
EnKotuDefans() adında bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupasında finallerinde en çok golü yiyen takımı döndürsün*/

function EnKotuDefans(fifaDatadizi) {
	
    /* kodlar buraya */
	const finaldatasi = fifaDatadizi.filter((mac) => mac.Stage ==="Final");
	let enCokGolYiyenTakim ="";
	let golSayisi = 0;
	for (let i in finaldatasi){
		if(finaldatasi[i]["Home Team Goals"]>finaldatasi[i]["Away Team Goals"]&&finaldatasi[i]["Home Team Goals"]>golSayisi){
			enCokGolYiyenTakim = finaldatasi[i]["Away Team Name"];
			golSayisi = finaldatasi[i]["Home Team Goals"];
		}else if (finaldatasi[i]["Away Team Goals"]>golSayisi){
			enCokGolYiyenTakim = finaldatasi[i]["Home Team Name"];
			golSayisi = finaldatasi[i]["Away Team Goals"];
		}
	}
	//console.log(enCokGolAtanTakim,golSayisi);
	return `En çok gol yiyen takım ${enCokGolYiyenTakim} yediği gol sayısı ${golSayisi}`;
	
}
console.log("BONUS-3 :" , EnKotuDefans(fifaData));

/* Hala vaktiniz varsa, README dosyasında listelenen hedeflerden istediğinizi aşağıdaki boşluğa yazabilirsiniz. */


/* Bu satırın aşağısındaki kodları lütfen değiştirmeyin */
function sa(){
    console.log('Kodlar çalışıyor');
    return 'as';
}
sa();
module.exports = {
    sa,
    Finaller,
    Yillar,
    Kazananlar,
    YillaraGoreKazananlar,
    OrtalamaGolSayisi
}
