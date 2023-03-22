import styled from 'styled-components'

const Wrapper = styled.aside`
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");



.containerdisplay {
  margin: 0 auto;
  max-width: 800px;
  font-family: Arial, sans-serif;
  color: #333;
}

.header {
  background-color: #f2f2f2;
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

.header-left {
  flex: 1;
}

.header-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.resumeImage {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
}

.resumeTitle {
  margin: 5px 0;
  font-size: 16px;
}

.resumeBody {
  padding: 20px;
}

.resumeBodySection {
  margin-bottom: 30px;
}

.resumeBodyTitle {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.resumeBodyContent {
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

.interests {
  display: flex;
  flex-wrap: wrap;
}

.interest {
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: #f2f2f2;
  border-radius: 20px;
}

`
export default Wrapper