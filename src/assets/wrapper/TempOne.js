import styled from 'styled-components'

const Wrapper = styled.aside`
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");



.header {
    width: 100%;
    margin: 0 auto;
    min-height: 10vh;
    background-color: #e8e2e2;
    padding: 30px;
    border-radius: 3px 3px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.resumeTitle {
    opacity: 0.6;
}
.headerTitle {
    margin-bottom: 15px;
}
.resumeImage {
    vertical-align: middle;
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.resumeBody {
    width: 100%;
    margin:  auto;
    padding: 30px;
    min-height: 79vh;
    border: 1px solid #e0e0ea;
}
.resumeBodyTitle {
    margin-bottom: 5px;
}
.resumeBodyContent {
    text-align: justify;
    margin-bottom: 30px;
    display: inline;
    margin-top: -10px;
}

.containerdisplay {
  background-color: var(--white);

}
`
export default Wrapper