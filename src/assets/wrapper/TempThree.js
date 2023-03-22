import styled from 'styled-components'

const Wrapper = styled.aside`
.header {
  background-color: #f2f2f2;
  padding: 50px;
  display: block;
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
}

.header-left {
  flex: 2;
}

.header-right {
  flex: 1;
}

.resumeBody {
  padding: 50px;
}

.resumeBodyTitle {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.resumeBodyContent {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
}

.interests {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
}

.interest {
  margin-right: 10px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: #f2f2f2;
  border-radius: 20px;
}
`
export default Wrapper