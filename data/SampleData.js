const CoursesSample = [
  {
    id: "0",
    name: "Curso de Administração",
    company: "Volume",
    classes: "50",
    duration: "5:34h",
    likes: "100",
    comments: "10",
    imageUrl:
      "https://www.ioha.org/wp-content/uploads/2014/07/newsletter-from-mouth-to-page-1202x640.jpg",
  },

  {
    id: "1",
    name: "Curso de Reboqueiro",
    company: "Volume",
    classes: "300",
    duration: "20:32h",
    likes: "32",
    comments: "5",
    imageUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMWFhUXFhUVGBgXGBYYGBgYFhUXFx0YGBcYHSggGBolGxUWITEhJSorLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGyslHSUtLS0rKzAtLS4xMisrLSstLS03Ky0tLS0tNS0tLi0tLS0tLS0rLS0tLS0tLS0tLS0tL//AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAD0QAAEDAgMGBAUDAgUEAwEAAAEAAhEDIQQSMQVBUWFxgRMikfAGMqGxwULR4SNSFGJygvEVQ5LCY7LiM//EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAuEQACAgEDAgUBCAMAAAAAAAAAAQIRAwQhMRJBBRNRYZGBIjJCcaGx8PEUweH/2gAMAwEAAhEDEQA/APXQFMBM0KxoUSVEmtUkwUggKFCdJOmFCAShIJ0WRIwlCkkiwIpoUkxRYEUoUkxTAiVHKppkBRWWqJCtTEJ2FFRCjlVpCiQnYqKSFEhXKJCBUVEKJCshRKAorLVWWq8qLggKKSFEtVhCiUwoqLVAhXOCrcgKBnHzRG6Z3Ji1D0dq0X1zRa8GoGhxE3gwfyPVGuagQM5iofTRbgqXBMVApYkry1Miwo6ljlYHIcOUw9UlxeHKQch86fOgAiU+dDh6WdABGdLOh/ESzphYRnSzobxUvEQJhGdIvQ2dMaqBBOZMXoXxU3ipgFZ03iIU1FE1k6CwrxExqIU1fdlB1b2UUKws1VHxUJ4vsKJrJhYWaqiaiDNdQNdMLDTVUTVQJxCY1+aBWGGoomqgjWUHV+JQAaaqUngVkP2rSH/cb2M/ZWt2+wNJdnI4gEAdzCi5L1HTXYevtVjXQXgRIIIMzuvHVV1Nq0i0jxG8DJ0G/wCiso/EOFc7KH3jQtP3ARdSowAOdABsMzSJ9Ql1odM4z4cYGYnE4ms6m11SAwBwMMBJ42/SOy6Cnj8zoa9hHK5nsVquoMP6R6BQyNYCQGjebDQBPqI0CmoqnVVWNqB7SWixsNxQ5qqQnsEeKnQZqpk6FZ1ocpByEFVP4yrossLzJZ+aD8dN4yOkA3Ol4iC8ZN4qdCsO8RN4qA8VMaqdCsPNVN4qANRR8VFCsP8AGUTVQJrKBrJ0Fh5rKJrcx3QBrKt1dOhWaBrcR6FRNfgfVZ5xKrNdOhdRoOxHEJjiCFmnEKp+KAnoUULqNQ4jhZQdiFThabTRfiKjnNZTMENYXuNmnygXPzRYKsbSw4aHtp1HD/5CWR1AgjuhpIUZdSTXDL3YkcUNV2pTaYdUaDzN/QXXPbVx3iyP6LCQWtaxznjzb8xiTpYQhNn/AAqXs8WrihTbMBlNkvN4s2bDnKqvLJvpSot68ENpt36V/tneAUxTbVfiGNY6IMOMyJAggGYCy8btJgB8Oo13MjKPqs7GVaLKbaYdUeGkR4hbublgMpiZj/MhXVsQHRSw+SmLZwy8AcXSToLhOeVY2oyTbf0RnSnlUpY5JRX5t/BKrtas4xlIbvcyw1/vcLWWfjdpVIhtMuBtOVz57mWu7BWDHsAcXhzoMkkNJmBYXsOSO/6mXeQZm2mxDbCBJcDpcLJmgsluL4+9vsjXptVLCorIrUvu7by96v8AejPwG2cRQbka1jCZN2iQItDWxlvy+yExeNNapFaq55sCBDBGtvmcdeS3TUayR4gzkaUWB7h1qOEDvCxse+JdUcGidB56h5Fzvl7eqhp4wlLplLYv1eXL5XVjxu/psEYbaVJhDKFIZjYnf3JElX1cVU1q04dPlsfWQZWRgxScXQ0tAEkg+aTxLpCz6daoXvNyy8EuJgCwnQblreLHOUsa2qra/Y58c2WMI5H9py7Pt70d5sva9aB5czQJJcYuRx/5UNufEOXCuqOYWtdDc07iYtbf+VyA+IRTbludbb727dlc/E1MW5rKga2hRNmtnzEaA31A1Sglwv1NsrS6pI39ngMphocSNZOt7/lXOrII1VE1VpUaMbk27Yb4ySA8RJFCs7QOTh3v3vQvic/z/CYVPdyffJQLQrxPfDqUvE98kLn3ac9T76KBq+yZj+fVArDPF3pvE9PfcoM1vZN/47KHje96dBYd4qgayBdX09lVur7k6E2aBrqDsQgHV+fdQ8XcnRGw84hVnELOpYnMAReddbflM6t/Ji/a9lJIGw81/YVZr+/eiAqVve76709IZjlBA0JJcAY5g7ugQ2lyJJy4CX1/fv7phWt79NbphhBqXT/pBsP9TiApimDo3N1Jf66NHqouW2w1FXTfxu/0AsdtIUQM7CZdl10sTobnTipYfbPkFQPpsadJaS467oJOm4rO2/hKRH9R7ad81iA4WP6WCN51lZFGo2rSFOhVD203BsuF/lcf0m/01XOlPLfSmm7OmvIjHqmnFJe39nW1NrZiGRUfmIBIBgAgGSCSQIPJWY/CYeAXU31Hf6sn/sXH6rAoY51NuR9TI4v4OY05n/pm0QYWuzEOLsrYAyySAATJI1vwVOLzJZvKaafwtieozYIabz7+yvTncDbjqVJjx/hzJnKS4synm3KC7vqg/EqvI8jwyRmzEgRmufMRIAhEYzHkOhrbgkZnS4iOZ/lQ2dh6z8zqhtMtzQYEbm7vouvkuMackjzilHPkvFjba/m5pYja4ptb4Qp3nzRJEcyeayMVtWpVsZd3t+3oEVVY2bk1DwFmjruPckqivWY2DUIbwaB7ntCxR8Nc11dba91Rvl4v5EnCWJJ+zT/YjSpU8xc9wDbuLDmggmbkfgqVTHtBIY2OL3giAeAPmI6wgjVqZw2mBoPmIGWDMk+vFDgEvJd/WeLkfob/AJnf/r0VUoyTcJfC4Ohg8qUVkx+9N8rfhXwvyCMVVIa6pmOk5rDWADY23R21WQ50EZjIuTe56d4ko7aNZ4blaQZImQLAX7bkFhKQBL3CTIAJ09PssumcY3J+pr1fXXSmuCNTZtR5bUaPIZADbnnYXO7dwVWJ2u4SxuhPd0DToPTqi8fVaKxyVWP8BhIhrhL5s6bgw97RE7iuZxGIDZgy46u/AXRg5VS23MUscU1KbulRdVxGU6y/jqG8hxdzXS/DdQilfeVyuDwhd5ndguqwjsrQFoxwSMufI5Gt46iayANVRNVXGc0DVSWf4ySAO9NXmTykgd03i7yeQ/goTxJ6aJhV+n06niq6LAvxALC3Tf8AuVDxuHT3dCeJz9lRfU/PQd4ueSdAFuqeqg6r39f3Qj6m7S9+/veoGtfh2v8AZSog2FPrRc8NB/yoPr8T23egN0J4vXtCbxCTJLh70CdCCqlWbTunfMcrW33UDU0EEcd5ju2yCqVtSbDUnyye53c0A3arC5tKnPmcG5x8t92fQm/uFGUoxW7JwxSyOooPwuIEOaCLPcINvm82+JgO+ipr7VpM/WCb2aAXfSY7rPxFA5neJUFNpg62keW4aYNgN6WE2DneXUqkUHXtIlzSRYf2i2vBY5aytkdSHhvU7k/53J4Lb8OId5XB3lMCRmLom26IReMxr6jmucM8BoJaSDJdrBPlta1r2XP7T2S+k4kjMLeYAwADN+CqwWOdTMbs4B75BY9Mywea3Lq5Ork0UHj6I/Zva0vk6fF/ED6NMvyCqc+UZ9WybfMRECP5VeBr4zFtzPrMpM4B14FrtAH1KCe9mIabkHMATx3iw4gbkfg6Bp0RYZWuFwZj+o1x1vx5rRpZwySfnSq3sr9exxfEoZtLjisEW6Stpem1/nwwij8N0P1B9c/5rM9LA6c1pUcGfkY0AD9NNunUxA9ApYDFS85xnaAyBmIMuzcPmHl3rutnbND2NcCGsIDgGgTBE9B6Fb/Phjm8eNbrk4+PT5NTjjmyydM4+nsEn5obO4+dx5Sbfda2zPg5gFqZYDHmzFrt+jRbfoWwuk8ajS+QZncRc93HToPRZu0drkNl7xTbwBjtOpPRUSyy6rb39Ebo6XEoOKiq72AVvhrDUcznONR4BIDsriSBI8oAaDOhI7rjdpYpvlY9pZL2NIcImDJE6HTcStvF7aNxSbA/vd+G/v6Ll9s46m0E1nZjvzGf4Gug9E3psuaUZy2S33KXrsGDHLFj3bVbdhtt4k02jI6JMbjAjdKwcF4lR4c0ZhIlzicvc3LuyIwdfDuBfVYYafJTJIaZ3uZPLS3OENidoOf5WDK36+/d1PPrWn0wW5DQ+ER6erK79OwX4FMVTNZ7yGAHKAMziTZo1a0BvUzeEfgQQ9rfKBrl10vfienqVhYHBlxJzZGjV5mBHD+4ro8M6ngz4td2YOpuysdlc50lpbymJJ4LBPrycP6nchGEKilsuEEbSo4cvDKjS0sa52ZriQIZmeSxw0EcVweKxjqjiGnyzrwHL01WtW2l49PEVSzI4xTBDjlPiuJdZ15yU3CZiHGy56q+1rN7+b+OanixXSQsso41cvgatisjC1hsbOO90fhU4LD5zJ09/RUtGZw3HmLAcNVrYaGgCII5wt8YUqRzJ5XN2w5oFt0BEiqEB4h9yR1BhIVt8+kEd4MqyKopk7NDxeqbxOnvqgRWngR1j7lOavIjr/H7KRENNbmkghX9z/CSAPQHVPpp+/7fdMXxAv3G87uaEdU3C5/PEDd1TMq6wb3k8PXfqkWWEmr7No5+7qJfv+/T6dEJmm1ogaz5uZ5cuSRfyte0XPMx9tEEWy7Pa03NuJnh6ckxff39t/ZDmpAvrEkcBz/n0VZrRLiYgE7gByvvj7pgEOfqbac7nh0t0WftLarKY1kxcCDBMfNwEbtVk7T2z+lpgf3iI7W00vy3LNwmGqVamVg82h/tIO8ncsmXU1tH5Olp9Bf2snwWY7aNSoYJEi4aPlcOEbz1WpgNhuyGrWllME1A0AgtJ4NBjfv4rb2HsSlRgEtdU5kGJ3AahWfEe3qLaYZTpl+rahztDZI+VmWT3PRYJZG+514YoxpJf8MHbeHYPDLNHMDpMlxzEm7iTJst74TxzBSFJxg53Bs783mjrqqMdRpnCscGSGtZHmmJ4jvfmsXCUqjyPD1a5r43CDEwI0zKCqqJPm6O5xlBrgcxAbBku0jmuPxuyWvBqUSMoPygTJad19/Na9GrWrAgZrSMxDmAzbygRPUyq9kbFqUp/qkyZMj8aekLPNU7TNOOW262OScCM+oG7UTlaW/+4W1gdpkvDdA4AdSGBxkb7lae08DRrPcwPlzRcsI0nS/Nc3isJUpuBLCA3MZ3SQQADv8A0hRUoz2fJdVfkdDs/EgHPTdAIaY/TIJdfhZ2h9V6Ls34lovwvgk+HVFEDK+0w2PKdD01XjOExBYKjW8abR1kN+wK2MNjA+mCYhzsscw6WgHdp01WrHnWNVJc7Wufr6nI1Xh05y68MvfpfH0fb9jt8TtWoxnlcDLwwE3I8pJ6/Lv+qxcZjQ2X1XEu4uue24DpAQH+Lf5Qwy2S4gxaGuuDwudPRZ/xDWZUbTzA2k5YNzA7HvZdXw+MYYXJyTd8+x5DxXJnlqo4nGUYtbr33+exOvts1B/TMNuJGpsbzwnh6rGrVhMAZnTPIHtv6eqTWvqWjK3gPyd/2VzmNpji7h+6nm1m1R+TRpfCt7n8d/qDmmYzOdB6CPRFYcUvB8Wo4XJDWsmXRvN4jkO5hZGOrA3cf9u49t/RZlbEnjPAbgDf3u6rnwj5js7k35MFFfQP2rtZz/KPKzc0cPf8cVntxEuBeSQAe3ZDF3qtDA4S3iP+XcN559FrjiVUYpZ5J9VhIdLRnltMmY47rxuWdicQcxaTYGwtbp6K3HYnPa0bghaBJPm7Wj7m6uUVFUiiWSWR9UgrDsH90n0sivFLYDtO4P7FCADQ++u8eisFTKIi27U+htPdTKy/xALgj6gjoRb7KXjEnW/G0+sgoVtUfpcPRv1BUnV+LR2uP/E6diExBRrHfrz1/E+qbOBoQD/pMeo/IQzaw3WHTM30OnZTNU8R/tJj0OiALy/i1p6ZUlU17+J7tH7JIA7h1Wx4usImY3njHVSe/QcIt/AQwNzOlp7bp6p21DM7zfkOXM70AWl08Rx4n9h+yg6rYkwBpP4HHRVB0kjUn36++aqr4gNaSbtGkC0/8/ZJtJWyUYuTpFmJrBrCSSBv7XGna34WDtDHvfpIbAIa4QSNx/4KHxuM8RxLi5n9gnyg8TuM9tVfsTZdXGVBnJAYLuDiR0EWMnppyWLNm6ltwdbTaby3b5/nBHZGy313EMs39ebQdOa28TmwrGtaCxzXPcIMse0kta528uiOhldhgsC2k0NaIAtzPM8Ssj4r2G3ENAzZX3DSIkjWDa43rE2dKPJwmIxbnva4NdmkbyTO++pO/wCynTwlWo8TSe0OvcES2dRvjmu8wGyKFOmAGVHVpBLyYYzWQ0fqEE7t4vuUcVTp0CaxmXFrT5obYHUcYBgBKVLgnCTnzsBVaZp4N4czJuAzZrA2v2Cxtg7RyVhvBBaehv8AcBaTPiRtai4upsA8Mv8AMSb5rW3nLfqqtjVaNUj+m1pIaQBzaXHThCplJxdtWWpJqkdQzaDMs3sCY3noued8SF5yxkE7j/8AZwk/+PdX7T2SHjz1MtOHHUR5bwd5tGv8rE2ls59GT/2yBcG8awZvdSlGKWxHG3K0+xqM2PWNY1fEINzExrutMjqSVrVMFnZlqwTy+ndYXw3tbylrDmbIid1rgQupovzAEiFnywnW5fCcb2OQ2lsfwodTDiJzOJOYyAQ2AOZWVRzBrWuBEPdUg2+VvlPqYXolSmsHa+xTUJc10OIy3uMutgN8qEMzW0/ktpPdGVgsfFKiN5eGdBBv9kXhMSKhpmLZHRPNzf2WJiKHhO8OZ8NjiTzfYfQz2TYeuQxuUA2NjzjQ7itCvoaj+L+zLmxQnOM5reO6+KZr7exjmBtNgBLgTmIuAOYuVz1WvAu6edr+iu2ptFpOpecsRNm9XD5o5eqwnuLvdlq0+nm4JTOZqdVjhJ+Xu/0Lq2Im+m7mffuUKp0qRcYaJK0Gsp0RLzLvUDpxK6UYpbI5OXK27kRwmDa2H1dNw/J5KnaGPzE3gd9ELjtoF5i4Hu/0QrH5rHdzKsTSKKcnbLPEk2NhwRjRIlU09NPpMptNDHqE0hhIJ5Ecxp+Um5d8tPFpkdwd3dUHKTc90mt/zDru9d3dOxUEGo39fm5iJ9N/0Um1QIyGeH6XDkHfgocN5X4g/ibpu/YoCgp9d03AJ5jK7vuPVRBm7TB4OA/4VLXN0I7XtzBTZW/od2dM9iEDotNc76d+RdCSrOJG9jSffApkBR3lWroOsD8qWlhqR9Pwhqp0GrnXJ3DjP7KTKlss3OpPvTT7JkBVHgNAHPMb2EaDtqsLH4sVHfra0fLP3OUxK2KtEvGRpdm0JBgkXnTQfglZv+Dd+l+Yc8pWHU5N+k6ugwrp6+4tjbPfiKoptcCDdxj5WjU2XqOy9lGnTFGjAgawON3Xtx9UB8GbObTw4dYveSXEDgYDe0fVblRhjyuc0/3NMEdDuWVPc2T3TRXXolj3NdrY20uNR9fQoDaGDz5TOUtIII1iQSOhhF0cK1sxqbk3kni4m7jzMqTgoSqy3HaVM872/tyt/iCwFzGsa8WkSS7KHGDfymQgdpbdc/KzMfCbRAM3zOkAuPGF13xB8OU65zGz/wC4DdwPFYj/AIJbEeIfTjxuq3KPc0K62MHA7ONUxReC2DANpB3cFobP+Ha7HhxOgAs6BZdDsn4dbSI80xECIW1kUZZX+EnDGn94CLC2l5w15DTIcJB5HiEDs7GeMzI8B1yDoLE/2ndBiy23skQUJR2XTGjY32sqU03TLqpbckMFsWkzRsd0eKIHykjlu9CpCAOQQWP2zQpfPUaD/aDLv/EXRFSlsrZCUoR3dIufRPiF7Z80FwLiRInQHQQdOWqerAEkwuT2j8cjShTn/M+w7NF1y+P2tWr/AP8AR5I4aN9Br3WhaHJldz2Mk/E8WNVDd/zudJ8Q7ZwplkeKR/aYbOl3f8rncTi/K0AhrTcsbYARaSZLj19Fnls2Ak8kQzC2805jZrG3MlocHO4N8wtrYiy6GHSwxKkcrPrsmV77IHeQSTuJRGFwTql/lYLSdO3EoulgmUxmq3MWaNP9yztpbakZW2HDgtNHPlNt0g3E4xlJpFOx3neffBc7icUXXJVFWqXaqACTZKMK3ZdTbmPojWUx0/KFoUxqigpxQNjwdVIunX7wVBMXKREkHx+38q2xu03/ALXa/wAqrONyTgD7/KAJZb+WWnh+yYu3OnqPcKIfuNx9R0Um1osRI9+iAHDbWhw+o9EwMahJwbqPv79U8nmR0uP3CAJZx/f9/wBklXlHEJkAd2XhzxBuItuhQxBuDv47oGk8So4VoE5dwueJCgx8wTe89I3nnyUist8SRkEyd/0kjhEoethqZLCWDK2QcgpskAzchhMmdTp2Squg9fWR79Ug4khm4HTgoyhGXKLMeWeN3F0XbI2s7D53NqmmCAQ11PMHEGzS4SGCCb68l0OF+PWlpNRjZmA1j7kR83mAEd55LlMS7M5p3WHWP5t25oSrg6bptkeJu23CARodFnlpY9jWtdPvR6K34xwxa1xLgXT5fK4tjjlcVY/4mwwj+pMibNc6ORygweRuvKf+kVicrIeTbLaTv3oPE7OqMOWpScw8HNI++qqelXqWx179EewVviDDAwagNpsHOF+YETyVNb4hwrTBqt6i49RZePmnG5IBR/xI+pYvEJLhI9YqfFOEBjxR1Fx+/wBEJU+NMKCbuPRpMrzIlWsbaS4Dqfwj/Dx+4PxHL2o7qr8eMvlpPPCSAP3WbivjmsR5WMbzu4/gLlKpjeOyJp4eoSBlIkEybCBqSTYAe9Qpx02KPYpnrc8vxGhjduVajPPWeXGPKDDRyIAE2QD8TLMgaBpJgST1TswzQ4h9RoGUkOYRUBI0b5T5SdLwiaNBhM06b6gykHOWth8/M0NmQBaDvPZWqKRRLJJ8sApsJs0E9PuTuCvp0gHuZVLm5cwIaA45gYyzMTM35LV/wVQglzm0gQ2WsESGzGm+XHfvTMq0qIsBI3m5IPX8Qp0UymkRoYJ2seCyXEE3qFrgG5Z1iAeHzHWVVVx1OkC1nr+r1/Cz9pbdLrAkrDrVy43KLSI1KQXj9pOedUAXlMkotlqikOArabBOqgGjefuiKY0hNIGyymI6KfUHqogqWbdqrEVjFpTSlHBMXIsBEcEgdxSJhPnSAfPFjccUjHGVEGOiaOCAFN7KbL/KYPCfsUg6fmE896g9kaXQBJ079Ukwrf5R9UkAdrUqHKAIub/t9E2YWY3dqdwJ3nnyVLnSRusSOSlhRAcR8tyJ1J4qwhRYKgaSTffJ6WJ9dFTkIaSDpcnTNz+nqqG1S8XGl46aAcd6liapswGwEu5u4dkBRaXeSAPMB/P5+yqqOyhp1Ort8uOgPITfsFa1suIBuQJPAC/0tfsOQrX55I0addJibDqfugdHQfD7wxwJu4mb7+PvmuyO06dRhbUALCDYwSCbEttZ0CxC81fiTYjdafvHIad0UNqOv5coY0uuRJIEm0yLflQaK5p3sFbS2JT8VzZjf2+8lZzvh5hcQ2oO45xu6KraHxC11x8zB0MSAQeizv8Ar/PpyUWkWxm63I7b2K+mPEY4OAsQ2Z65YuI1QGJqUxZri42/SWjSd9+SLO2ydTooO2zwPD6JUPzH6FNLBOrRDXtbPmcYAA3xOpW4Nl0wG5nl1uU26ysV+2CqHbVMQjYTc3wdNkw7RZsni4zpvjRVYjbQAAAAAER/wuVqY5x3qh1UotB0SfLNnFbbJsFlVsU52pQ5TKLZNQSHlJIBPCRMUqdNknoOKiGIhtMXPpCaQmxmyLFp9ZVoKZrU6mQbHTSkUyYh7hKeiikgB8ybMmThADgpEbwopIGOCrWNJ014ceipIUcxCAJkFJT/AMRxSQI6ikZidOHEDd0m6trVRBHuPcBC0Ha5jeJ1gAcFLDARmOhvzPDsrBFjHAMc8iNQPSO5VGFcWgz8xEAcD7KZ2kHSTHUcEqbLNLtXafW3qbnkkBcHFlMt/U608e/FRw1Hy5Z0InmYiPqqatbM5vBk6cTw9FOo4s80jQnpO8/W6AB6VXxD4YMG+Yg3A4DgZn6oLG4lsNLXeQPa3ym+VouY4mN9vVEFwpuywZqEbxcwBruElB7RpNa51MmcrGm1yXhka7mgXI5KuRNGZiAZkmS4Zj/uvfnv7qAdBuma2TA9wk0SYmFWTGJTSkQmQA8pJlJADJ0oTwgBgnhIhSayRKAGUmjeWykJjTVTaL6fX8KSQmyTW/T6KQ5cFIgEaJ+SlRFsUpkwSJTIiJSlMQkUAKU6iUkDHITJiUpSGOmKZIOQA4TJdEiUAMkkkkBuuqeYtbv16Iuu4gZbaSTwHLmkkrCJUwSwudroBujh+6fCPJM/XronSQBA04MDf9Mvspi0uLmnQOyn0E/RJJJgDjEtaHVnM8+aKd7AZZuBv39oWZgny573fLBzn/WY+pP3SSUJck1wBseRpwI7EQfoncBunukkokiCRckkkAk4CSSAJBuvRMAkkgCYE9U4p8kySkIvFPhqpAc76JJKZBsjCkkkgREpJJIGMmSSSGKUsySSAGTJJJAPKYlJJADBKUkkDQpTJJIA/9k=",
  },

  {
    id: "2",
    name: "Curso de Segurança",
    company: "Wilson Sons",
    classes: "67",
    duration: "1:51h",
    likes: "532",
    comments: "120",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
];

export { CoursesSample };
