# Igloo Connect

Currently, there are an estimated 300,000 immigrants to Canada per year, 63.7%
being economic immigrants and 16.6% being refugees. These individuals have
chosen to come to Canada under many different circumstances, but they all have
one goal in mind: to start a new life in this new country. We want to help them
find a place where they feel like they can belong, one building block at a time,
to make up their own little igloo in Canada.

The purpose of Igloo Connect is to connect potential and new immigrants or
refugees from in or outside of Canada to communities inside and help them find a
new place that they can call home. Igloo Connect allows you to quickly search for
neighborhoods throughout Canada that match your specific needs, especially those
that have a significant population that speak the same language, or are from the
same ethnicity. By simply supplying your locations on where you want to live and
some other basic information, and we can easily find you a new potential home.

## Problem That we are solving

There is a wealth of information on Canada, but a large majority of them are
written in English, which may be less accessible for those who need to do large
amounts of research on finding their new home in Canada. Due to the COVID19
pandemic that has restricted travel and face-to-face meetings, finding fast and
accurate information has been a large challenge for those who have restricted
English skills, as well as the inability to meet advisors due to health concerns.
Additionally, many newcomers arrive in Canada and have a tougher time finding
work due to a lack of accessibility to jobs for non-english speakers. We aim to
be the first stop for any newcomers to Canada to first scope out their ideal 
living area, as well as see what potential neighborhoods fit with their family
and explore potential finances they will face in said neighborhood. If they
don’t speak English, we show them jobs related to their skills that don’t require
them to speak English on the job. We want to allow them to easily connect with
financial professionals for help with mortgages or communities that can facilitate
their transition into the Canadian life. We also want to put the power back into
the user’s hands, to help them search for what they want, rather than have a
third party help them search.

## Impact the project will have on the domain

Our project will facilitate the gap of information that immigrants and refugees
face when researching about their new home, as well as provide easy access to
jobs, community centres, financial help like mortgages through RBC, as well as
easy and translated access to the housing market. The user will have complete
freedom to view a massive wealth of information at their own choosing, and our
product will be available to them at all times.

## Feasibility of project

Although this project is ambitious, it is extremely feasible and easily
expandable to larger domains: the ambition is to allow newcomers to Canada an
in-depth glance at their new neighborhood, without having to be physically
present in Canada to do so.

## Technical

The core functionality of this project revolves around building a personal
preference profile of the user and using this information to provide suggestions
on neighborhoods/communities which satisfy the user’s needs. Though the team
encountered some technical issues during development, the original vision for
the product was that of a react application running on a flask backend. The user
would be presented with a series of prompts pertaining to what they value in a
community and the answers to these prompts would then be used to filter data
obtained from either web scraping or API requests. As an example, the team
looked into scraping demographic data from Wikipedia. Wikipedia has the
advantage of consistent formatting and has extensive population data on every
major city in Canada. For more refined data, the team looked into the city of
Toronto’s Open Data Portal which contains a wealth of datasets on demographics,
affordable housing, transportation, etc. Additionally, the team intended to use
Foursquare’s explore API to obtain the locations and names of various parks and
establishments and use the information obtained from the web scraping to perform
cluster analysis on the data to determine optimal neighborhoods.

## Why would RBC invest in this?

RBC already has a program for newcomers to Canada, and we want to extend that
and make it accessible to a larger audience, but also connect it to the real
estate market to allow them to find and buy houses with a smooth experience,
while also heavily emphasizing on the cultural aspect (in relation to immigrants)
of the house search: neighborhoods where there is a similar ethnic group, areas
with schools and jobs, or access to cultural community centres.

## What’s on the market already? (Realtors in our case)

RBC’s built-in app has similar functionalities, but is much less optimized to
“newcomers” to Canada; it is only offered in only English, and does not provide
a lot of information that a new immigrant would be more interested in, such as
demographics of a particular area. Realtors they are often contactable by phone
and met in person / have their own websites, but we have much more to offer
towards immigrants specifically.
