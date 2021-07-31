{
    PageView,
    id = "pg",
    layout_width = "fill",
    layout_height = "fill",
    pages =
    {
      {
        LinearLayout,
        orientation = "vertical",
        padding = "5",
        {
          ScrollView,
          layout_width = "fill",
          layout_height = "-1",
          layout_gravity = "center_horizontal",
          {
            LinearLayout,
            layout_height = "-1",
            layout_width = "-1",
            orientation = "vertical",
            {
              LinearLayout,
              id = "_drawer_header",
              layout_height = "-2",
              layout_width = "-1",
              orientation = "vertical",
              {
                LinearLayout,
                layout_height = "-1",
                layout_width = "-1",
                orientation = "vertical",
                padding = "20",
                {
                  LinearLayout,
                  orientation = "horizontal",
                  layout_height = "10",
                  layout_width = "-1"
                },
                {
                  LinearLayout,
                  layout_height = "0%h",
                  layout_width = "100%w",
                  background = "#FF00FFDE"
                },
                {
                  Switch,
                  layout_width = "fill",
                  layout_height = "6%h",
                  textColor = "0xffffffff",
                  text = "mp -YELLOW BODY",
                  id = "Fiture1",
                  textSize = "12dp",
                  gravity = "center",
                },
                {
                  LinearLayout,
                  layout_height = "5%h",
                  layout_width = "100%w",
                  background = "#0000"
                },
                {
                  Switch,
                  layout_width = "fill",
                  layout_height = "6%h",
                  textColor = "0xffffffff",
                  text = "br -YELLOW BODY",
                  id = "Fiture2",
                  textSize = "12dp",
                  gravity = "center",
                },
              }
            }
          }
        }
      },
