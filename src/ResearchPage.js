import React, { Component } from 'react';
import {Anchor, Box, Button, Heading, Image, Paragraph, ResponsiveContext} from "grommet";
import {newsData} from "./NewsData";
import {NewsItem} from "./NewsItem";
import {paperData, posterData} from "./PubData";
import {PubItem} from "./PubItem";
import {Section} from "./Section";
import {Footer} from "./Footer"
// import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faFile, faEnvelope, faVolumeHigh, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faGoogleScholar, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const profile = '/img/profile.jpg';

library.add(faFile, faEnvelope, faGoogleScholar, faXTwitter, faVolumeHigh, faPlay);

const isLatestNews = (dateStr) => {
    /* Incompatible in Safari */
    // let newsDate = Date.parse(dateStr)
    // let today = Date.now()
    // let year = 31556952000
    // return today - newsDate < year;

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let today = new Date()
    let thisMonth = today.getMonth()
    let thisYear = today.getFullYear()
    let newsDateItems = dateStr.split(" ")
    let newsMonth = newsDateItems[0]
    let newsYear = newsDateItems[1]
    if ((thisYear - 1 > newsYear) ||
        ((months.indexOf(newsMonth) < thisMonth) && (thisYear > newsYear))) {
        return false
    } else {
        return true
    }
}

class ResearchPage extends Component {
    state = {
        showAllNews: false,
        currentProject: null,
    }

    anchorStyle = {
        fontWeight: 'normal',
        'textDecoration': 'underline ',
        'WebkitTextDecoration': 'underline',
        'textDecorationColor': this.props.theme.global.colors.brand,
        'WebkitTextDecorationColor': this.props.theme.global.colors.brand,
    }

    subtleAnchorStyle = {
        fontWeight: 'normal',
    }

    render() {
        return (
            <ResponsiveContext.Consumer>
                {size => (
                    <Box direction="column" flex={true} overflow='auto' align="center" alignContent="center">
                        <Box flex={false}>
                            <Box fill="horizontal" align="center" alignContent="center" pad='large'
                                 direction={(size === "small") ? 'column' : 'row'}
                                 background="white" margin={{"top": "small", "bottom": "small"}} elevation="xsmall">
                                <Box height="360px" width="360px" direction="column" margin="small">
                                    <Image
                                        fit="contain"
                                        // margin="medium"
                                        src={profile}
                                    />
                                    <Box margin="xsmall" direction="column" gap="xsmall">
                                        <Button plain alignSelf="start" icon={<FontAwesomeIcon icon="fa-solid fa-envelope" />} label="lyuye [at] example.com" target="_blank" href="mailto:lyuye@example.com" />
                                        <Button plain alignSelf="start" icon={<FontAwesomeIcon icon="fa-brands fa-google-scholar" style={{color: "#74C0FC",}} />} label="Google Scholar" target="_blank" href="#"/>
                                        <Button plain alignSelf="start" icon={<FontAwesomeIcon icon="fa-brands fa-x-twitter" />} label="Twitter | X" target="_blank" href="#"/>
                                    </Box>
                                    {/*<Text size="small">* Hyunsung is pronounced as [hjʌn sʌŋ].</Text>*/}
                                    {/*<Text size="small" alignSelf="center">Hyunsung is pronounced hjʌn sʌŋ.</Text>*/}
                                </Box>

                                <Box orientation="column" width="600px">
                                    <Paragraph margin="small" size="small" fill={true} color="black">
                                        Welcome to my personal website! I am Lyuye (绿叶), a software developer and technology enthusiast with a passion for creating elegant and efficient solutions to complex problems.
                                    </Paragraph>
                                    <Paragraph margin="small" size="small" fill={true} color="black">
                                        My expertise spans across web development, software engineering, and user interface design. I enjoy working with modern technologies and frameworks to build responsive, user-friendly applications that deliver exceptional user experiences.
                                    </Paragraph>
                                    <Paragraph margin="small" size="small" fill={true} color="black">
                                        When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends and best practices.
                                    </Paragraph>

                                </Box>
                            </Box>

                            <Section>
                                <Heading level="3" color="black">Latest News & Travels</Heading>
                                { this.state.showAllNews ?
                                    newsData.news.map(news => {
                                        return <NewsItem size={size} date={news.date} text={news.text}/>
                                    })
                                    :
                                    newsData.news.map(news => {
                                        return isLatestNews(news.date) ?
                                            <NewsItem size={size} date={news.date} text={news.text}/>
                                            : <div></div>
                                    })
                                }
                                <Box align="center">
                                    <Anchor color="focus" style={this.subtleAnchorStyle}
                                            onClick={() => {this.setState({showAllNews: !this.state.showAllNews})}}
                                            label={this.state.showAllNews ? "Show Latest" : "Show All"}
                                    />
                                </Box>
                            </Section>

                            <Section>
                                <Heading level="3" color="black">Publications</Heading>
                                <Heading level="4">Conference and Journal Papers</Heading>
                                { paperData.papers.map(paper => (
                                    <div>
                                        <PubItem title={paper.title} authors={paper.authors} venue={paper.venue} award={paper.award}
                                                 award2={paper.award2} pdf={paper.pdf}
                                                 paper_link={paper.paper_link} website={paper.website} video={paper.video}
                                                 slides={paper.slides} code={paper.code} poster={paper.poster}
                                                 size={size} thumbnail={paper.thumbnail}/>
                                    </div>
                                ))}
                                <Heading level="4">Posters, Demos, Videos, and Workshop Papers</Heading>
                                { posterData.posters.map(poster => (
                                    <div>
                                        <PubItem title={poster.title} authors={poster.authors} venue={poster.venue} award={poster.award}
                                                 paper_link={poster.paper_link} pdf={poster.pdf} poster={poster.poster}
                                                 website={poster.website} video={poster.video} slides={poster.slides}
                                                 code={poster.code}
                                                 size={size}
                                        />
                                    </div>
                                ))}
                            </Section>
                        </Box>
                        <Footer/>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        )
    }
}

export { ResearchPage };