import React, { Component } from "react";

class Gallery extends Compnent {
    render() {
        return (
        <aside class="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
            <section class="widget has-divider">
                <h3 class="title">Job Vacancies</h3>
                <ul class="job-list custom-list-style">
                    <li><i class="fa fa-caret-right"></i><a href="#">Learning Support Assistant</a></li>
                    <li><i class="fa fa-caret-right"></i><a href="#">Lecturer - Business Studies</a></li>
                    <li><i class="fa fa-caret-right"></i><a href="#">Lecturer - Computer Science</a></li>
                    <li><i class="fa fa-caret-right"></i><a href="#">Administrative Assistant</a></li>
                </ul>
                <a class="btn btn-theme" href="jobs.html">Find out more</a>
            </section>
            <section class="widget has-divider">
                <h3 class="title">Video tour</h3>
                <iframe class="iframe" src="//www.youtube.com/embed/Ks-_Mh1QhMc?rel=0&amp;wmode=transparent" frameborder="0" allowfullscreen=""></iframe>
            </section>
            <section class="widget">
                <h3 class="title">Contact</h3>
                <p>Suspendisse mollis neque augue, vitae malesuada mi dictum quis. Ut mollis purus vel orci aliquam sagittis. Aliquam erat volutpat. </p>
                <p class="tel"><i class="fa fa-phone"></i>Tel: 0800 123 4567</p>
                <p class="email"><i class="fa fa-envelope"></i>Email: <a href="#">enquires@website.com</a></p>
            </section>
        </aside>
        )
    }
}