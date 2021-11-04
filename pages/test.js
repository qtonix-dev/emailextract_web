import React, { Component } from 'react'
import * as cheerio from 'cheerio';
import Crawler from 'crawler';

export class test extends Component {




    componentDidMount(){
        


        var Crawler = require("crawler");
        var c = new Crawler({
            maxConnections : 10,
            // This will be called for each crawled page
            callback : function (error, res, done) {
                if(error){
                    // console.log(error);
                }else{
                    var $ = res.$;
                    // $ is Cheerio by default
                    //a lean implementation of core jQuery designed specifically for the server
                    // console.log(email.text($.html()));

                    var tmpData={
                    response:true,
                    // page:domain,
                    title:$('title').text(),
                    facebook:$('a[href^="https://www.facebook.com/"]').attr("href")===undefined?$('a[href^="https://facebook.com/"]').attr("href"):$('a[href^="https://www.facebook.com/"]').attr("href"),
                    instagram:$('a[href^="https://www.instagram.com/"]').attr("href")===undefined?$('a[href^="https://instagram.com/"]').attr("href"):$('a[href^="https://www.instagram.com/"]').attr("href"),
                    twitter:$('a[href^="https://twitter.com/"]').attr("href"),
                    linkedin:$('a[href^="https://www.linkedin.com/"]').attr("href")===undefined?$('a[href^="https://linkedin.com/"]').attr("href"):$('a[href^="https://www.linkedin.com/"]').attr("href"),
                    googleplus:$('a[href^="https://plus.google.com/"]').attr("href"),
                    youtube:$('a[href^="https://www.youtube.com/"]').attr("href")===undefined?$('a[href^="https://youtube.com/"]').attr("href"):$('a[href^="https://www.youtube.com/"]').attr("href"),
                    whatsapp1:$('a[href^="https://chat.whatsapp.com/"]').attr("href"),
                    whatsapp2:$('a[href^="https://wa.me/"]').attr("href"),
                    // email:varEmails,
                    // tel:varPhones,
                    }

                    // totalData.push(tmpData)
                    console.log(tmpData)
                }
                done();
            }
        });

        // Queue just one URL, with default callback
        c.queue('http://qtonix.com');
        c.queue('http://abc.com');
        c.queue('http://flowerhornfishstoreindia.com/');
        c.queue('http://qtonix.com/contactus');
    }



    render() {
        return (
            <div>
                waooo        
            </div>
        )
    }
}

export default test
