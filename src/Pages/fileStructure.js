console.log("App is starting");

const fs = require('fs');
const mkdirp = require('node-mkdirp')

    const directories = [
        {
            data: ['about.js', 'missionStatement.js', 'administration.js', 'principalsWelcome.js'], 
            name:'/About'
        },
        {
            data: ['business.js', 'core.js', 'humanities.js', 'languages.js', 'sciences.js', 'technology.js', 'transitionYear.js'],
            name: '/Academia'
        },
        {
            data: ['sports.js', 'debating.js', 'communityInitiatives.js', 'gaisce.js', 'boiBankProg.js'],
            name: '/ExtraCurricular'
        },
        {
            data:['enrolmentPolict.js', 'enrolmentForm.js'],
            name: '/Enrolment'
        }, 
        {
            data:['runForLife.js'],
            name: '/RunForLife'
        },
        {
            data:['studentCouncil.js', 'guidanceServices.js', 'studyTips.js'],
            name: '/StudentServices'
        },
        {
            data: ['parentsAssc.js', 'booklistAndUniform.js', 'disciplinaryProcedureExp.js', 'disciplinaryProcedureSusp.js', 'codeOfBehaviour.js', 'policyProcedure.js' ],
            name: '/Parents'
        },
        {
            data: ['gallery.js'],
            name: '/Gallery'
        },
        {
            data: ['contact.js'],
            name: '/Contact'
        }
    ]

    renderBoiler = () => {
        return (
            `
            import React, { Component } from "react";
            import Navbar from "../components/Navbar/Navbar";
            import Page from "../components/Page/Page";

            class Home extends Component {
            render() {
                return (
                <div>
                    <Navbar />
                    <Page title={"Home"} current={"Home"}>
                    <h1>Hello</h1>
                    </Page>
                </div>
                );
            }
            }
            export default Home;
            `
        )
    }

    mkdirpCallback = (i) => {
        let files = directories[i].data;
        let jsx = renderBoiler();

        for(let z = 0; z<files.length; z++){
            console.log(';akdf;sadj')
            fs.writeFile(`./${directories[i].name}/${files[z]}`, jsx, function(err) {
                if(err) {
                    console.log('ERROR')
                }
            });
        }
    }



    for(let i = 0; i<directories.length; i++) {
        mkdirp(directories[i].name, null, mkdirpCallback(i))
    }




