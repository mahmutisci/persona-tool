import React, { Component } from 'react';

import Header from './PersonelDetail/Header';
import SideBar from './PersonelDetail/SideBar';
import Content from './PersonelDetail/Content';




class PersonelDetail extends Component {
  constructor(){
    super();
    this.state = {PersonelDetail: {
      record: {
        name: "Pınar",
        title: 'Zaten Pınar kim ki?!',
        desc: 'Şehir İçi Abla',
        age: "29",
        city: "İstanbul",
        merital: "Bekar",
        job: "Plaza Çalışanı",
        keywork: "ileitşimi kuvvetli, ilgi bekler, estetik kaygıları var, araştırma yapar, takıntılı",
        effects: {
          money: 2,
          sales_assistan: 3,
          friends: 3,
        },
        platforms: {
          car: "Fiat 500",
          computer: "Dell XPS13",
          phone: "iphone 7",
          snapch: "denem123",
          instagram: "denem123",
          twitter: "denem123",
          youtube: "denem123",
        },
      },
      content: [
        {
          title: "Beklenti ve İstek",
          values: [
            "Estetik Dış görünüşe önem veriyor. Yakıt tüketimi ilk önceliği değil.",
            "İlgi Markanın onunla ilgilenmesini bekliyor. İlk ziyaretinde ona özel ilgi gösterilmesi, bir süre sonra aranması kendini değerli hissettiriyor.",
            "Uzman Satış Danışmanı Onunla ilgilenen kişinin her anlamda donanımlı olmasını, kafasına takılan tüm sorulara cevap vermesini ve onu yönlendirmesini bekliyor.",
            "Premium hissi Kullandığı tüm ürünlerin kendi muadilleri arasında en iyisi olduğundan emin olmak istiyor. Daha premium gördüğü bir marka var ise ekonomik anlamda ulaşabildiği an aracını değiştirebilir.",
            "İnce Ayrıntılar Satış Danışmanı veya Servis Çalışanının verdiği sözleri tutmasını bekliyor. Servis sonrasında aracın iç temizliği yapılmış mı muhakkak kontrol eder.",
          ]
        },
        {
          title: "Acı Noktaları ve Hayal Kırıklıkları",
          values: [
            "Estetik Dış görünüşe önem veriyor. Yakıt tüketimi ilk önceliği değil.",
            "İlgi Markanın onunla ilgilenmesini bekliyor. İlk ziyaretinde ona özel ilgi gösterilmesi, bir süre sonra aranması kendini değerli hissettiriyor.",
            "Uzman Satış Danışmanı Onunla ilgilenen kişinin her anlamda donanımlı olmasını, kafasına takılan tüm sorulara cevap vermesini ve onu yönlendirmesini bekliyor.",
            "Premium hissi Kullandığı tüm ürünlerin kendi muadilleri arasında en iyisi olduğundan emin olmak istiyor. Daha premium gördüğü bir marka var ise ekonomik anlamda ulaşabildiği an aracını değiştirebilir.",
            "İnce Ayrıntılar Satış Danışmanı veya Servis Çalışanının verdiği sözleri tutmasını bekliyor. Servis sonrasında aracın iç temizliği yapılmış mı muhakkak kontrol eder.",
          ]
        },
        {
          title: "Deneyim",
          values: [
            "Dış görünüşe önem veriyor. Yakıt tüketimi ilk önceliği değil. Markanın onunla ilgilenmesini bekliyor. İlk ziyaretinde ona özel ilgi gösterilmesi, bir süre sonra aranması kendini değerli hissettiriyor. Onunla ilgilenen kişinin her anlamda donanımlı olmasını, kafasına takılan tüm sorulara cevap vermesini ve onu yönlendirmesini bekliyor.",
            "Kullandığı tüm ürünlerin kendi muadilleri arasında en iyisi olduğundan emin olmak istiyor. Daha premium gördüğü bir marka  var ise ekomonik anlamda ulaşabildiği an aracını değiştirir. Satış danışmanı ve servis çalışanının verdiği sözleri tutmasını bekliyor.",
            "Servis sonrasında aracın iç temizliği yapılmış mı muhakkak kontrol eder.",
          ]
        }
      ],
      
    }}
    this.updateData = this.updateData.bind(this);
  }
  updateData(path, value){
    let tempPersonelData = this.state.PersonelDetail;

    this.setState({PersonelDetail: tempPersonelData});
  }
  editZone(elem, name, value){
    elem.innerHTML("<input type='text' name='"+ name +"' value='"+ value +"' ");
  }
  saveZone(elem, value){
    elem.target.parentNode.innerHTML(value);
  }
  render() {
    return (
      <div className="main-wrapper">
        <Header title={this.state.PersonelDetail.record.title} updateFunc={this.updateData}/>
        <div className="container">
          <SideBar record={this.state.PersonelDetail.record} />
          <Content contents={this.state.PersonelDetail.content} />
        </div>
      </div>
    );
  }
}

export default PersonelDetail;
